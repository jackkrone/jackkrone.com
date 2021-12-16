import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import RenderByYear from '../../components/RenderByYear';

const Projects = ({ data }) => {
  const projectsList = data.allMdx.nodes;

  return (
    <Layout pathName="/projects" title="Projects">
      <RenderByYear posts={projectsList} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectsPage {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/md-projects/" } }
      sort: { fields: frontmatter___date, order: DESC }
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

export default Projects;
