import React from 'react';
import { Link } from 'gatsby';
import groupByYear, { listType } from '../functions/groupByYear';

interface PrintByYearProps {
  list: listType[];
}

const PrintByYear = ({ list }: PrintByYearProps) => {
  // Get groups by year
  const groups = groupByYear(list);

  return (
    <>
      {groups.map(group => (
        <div key={group.year} className="mb-4">
          <h5>{group.year}</h5>
          <hr />
          <div className="d-grid gap-3">
            {group.posts?.map(post => (
              <Link
                to={`${post.slug}`}
                key={post.id}
                className="btn btn-light shadow-sm text-start"
                style={{ borderRadius: '1.5rem' }}
              >
                {post.date.toLocaleDateString('default', {
                  month: 'short',
                  day: '2-digit',
                })}
                : <u className="link-primary">{post.title}</u>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PrintByYear;
