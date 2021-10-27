import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import PrintByYear from '../../components/PrintByYear';

const Projects = ({ data }: Record<string, unknown>) => {
  const projectsList = data.allMarkdownRemark.nodes;
  console.log(projectsList);

  return (
    <Layout>
      <h1>Projects</h1>
      <PrintByYear list={projectsList} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
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
