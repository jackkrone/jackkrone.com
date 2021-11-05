import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import PrintByYear from '../../components/PrintByYear';

const Thoughts = ({ data }: Record<string, unknown>) => {
  const thoughtsList = data.allMdx.nodes;

  return (
    <Layout title="Thoughts">
      <PrintByYear list={thoughtsList} />
    </Layout>
  );
};

export const query = graphql`
  query ThoughtsPage {
    allMdx(filter: { fileAbsolutePath: { regex: "/md-thoughts/" } }) {
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
