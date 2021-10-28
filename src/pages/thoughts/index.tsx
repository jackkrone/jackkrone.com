import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import PrintByYear from '../../components/PrintByYear';

const Projects = ({ data }: Record<string, unknown>) => {
  const thoughtsList = data.allMarkdownRemark.nodes;

  return (
    <Layout title="Thoughts">
      <PrintByYear list={thoughtsList} />
    </Layout>
  );
};

export const query = graphql`
  query ThoughtsPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/thoughts/" } }) {
      nodes {
        frontmatter {
          title
          slug
          date
        }
        id
      }
    }
  }
`;

export default Projects;
