import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import RenderByYear from '../../components/RenderByYear';

const Thoughts = ({ data }) => {
  const thoughtsList = data.allMdx.nodes;

  return (
    <Layout title="Thoughts">
      <RenderByYear posts={thoughtsList} />
    </Layout>
  );
};

export const query = graphql`
  query ThoughtsPage {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/md-thoughts/"}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          date
          slug
          title
        }
      }
    }
  }
`;

export default Thoughts;
