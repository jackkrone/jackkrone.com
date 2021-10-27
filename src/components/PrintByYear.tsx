import React from 'react';
import { Link } from 'gatsby';
import groupByYear from '../helpers/groupByYear';

const PrintByYear = ({ list }) => {
  const yearGroups = groupByYear(list);

  const output = yearGroups.map(group => {
    const year = group[0];
    const posts = group[1];
    return (
      <>
        <h5>{year}</h5>
        <hr />
        <div className="d-grid gap-3">
          {posts.map(post => (
            <Link
              to={`${post.frontmatter.slug}`}
              key={post.id}
              className="btn btn-light shadow-sm text-start"
              style={{ borderRadius: '1.5rem' }}
            >
              {post.frontmatter.date}:{' '}
              <span className="link-primary">
                <u>{post.frontmatter.title}</u>
              </span>
            </Link>
          ))}
        </div>
      </>
    );
  });

  return output;
};

export default PrintByYear;
