import React from 'react';
import { Link } from 'gatsby';

interface fmType {
  title: string;
  date: string;
  slug: string;
}

interface postsType {
  id: string;
  frontmatter: fmType;
}

interface RenderByYearProps {
  posts: postsType[];
}

const RenderByYear = ({ posts }: RenderByYearProps) => {
  // Check if year has been rendered yet
  let checkObject: Record<string, boolean> = {};

  const toBeRendered: Array<any> = [];

  posts.forEach(post => {
    // get year
    const date = new Date(post.frontmatter.date);
    const year = date.getFullYear();

    // check if year has been rendered yet
    if (!checkObject[year]) {
      checkObject[year] = true;
      // render year
      const heading = (
        <>
          <h5 className="mt-4">{year}</h5>
          <hr />
        </>
      );
      toBeRendered.push(heading);
    }

    // render post
    const postLink = (
      <div className="d-grid">
      <Link
        to={`${post.frontmatter.slug}`}
        className="btn btn-light shadow-sm text-start mb-3"
        style={{ borderRadius: '1.5rem' }}
      >
        {date.toLocaleDateString('default', {
          month: 'short',
          day: '2-digit',
        })}
        : <u className="link-primary">{post.frontmatter.title}</u>
      </Link>
      </div>
    );
    toBeRendered.push(postLink);
  });

  return (
    <>
    {toBeRendered}
    </>
  );

};

export default RenderByYear;
