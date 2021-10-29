// This function accepts a list of posts provided by a GraphQL request and returns a list of lists sorted by year

interface fmType {
  title: string;
  date: Date;
  slug: string;
}

export interface listType {
  id: string;
  frontmatter: fmType;
}

interface newElemType extends fmType {
  id: string;
}

type yearsType = Record<string, newElemType[]>;

// Take GraphQL query nodes and sort them into an array of arrays
const groupByYear = (list: listType[]) => {
  // simplify list items
  const simpleList = list.map((elem: listType) => {
    const { title, slug } = elem.frontmatter;
    const date = new Date(elem.frontmatter.date);
    const { id } = elem;
    const newElem: newElemType = { title, date, slug, id };
    return newElem;
  });

  // use Array.prototype.reduce() to convert list into object of objects, as follows:
  // years = { 2020: [...], 2017: [...], 2022: [...], ...}
  // issue with .reduce() method: https://www.reddit.com/r/typescript/comments/bfkncu/when_using_arrayreduce_and_the_initial_value_is/
  const years = simpleList.reduce((prev, nextElem) => {
    // Extract year from date property
    const year = nextElem.date.getFullYear();
    // create output object
    const output = prev;
    if (!output[year]) {
      output[year] = [];
    }
    // -- used optional chaining below at address error: Object is possibly undefined
    // -- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining
    output[year]?.push(nextElem);
    return output;
  }, {} as Partial<yearsType>);

  // convert years obj to iterable array of objects with following structure:
  // groups = [{ year: 2020, posts: [...] }, { year: 2017, posts: [...] }, ...]
  let groups = Object.entries(years).map(([key, value]) => ({
    year: key,
    posts: value,
  }));

  // sort groups
  groups = groups.sort((a, b) => {
    if (a.year > b.year) {
      return -1;
    }
    return 1;
  });

  // sort posts within each group
  groups.forEach(group => {
    let { posts } = group;
    // don't need to read value of posts since JS passes array by reference
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    posts = posts?.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      return 1;
    });
  });

  return groups;
};

export default groupByYear;
