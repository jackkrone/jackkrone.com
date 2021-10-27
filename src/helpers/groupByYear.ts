type fmType = {
  title: string;
  date: string;
  slug: string;
};

type listType = {
  id: string;
  frontmatter: fmType;
};

// Take GraphQL query nodes and sort them into an array of arrays
const groupByYear = (list: listType[]) => {
  const groups = list.reduce((output, elem) => {
    const year = elem.frontmatter.date.substring(0, 4);
    if (!output[year]) {
      output[year] = [];
    }
    output[year].push(elem);
    return output;
  }, {});
  const arrayGroups = Object.entries(groups);
  const sortedGroups = arrayGroups.sort((a, b) => {
    if (a[0] > b[0]) {
      return 0;
    }
    return 1;
  });

  // I may still need to sort the nested arrays

  return sortedGroups;
};

export default groupByYear;
