// Turn off projects page for now until I have projects to share
/*
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import PrintByYear from '../../components/PrintByYear';

const Projects = ({ data }: Record<string, unknown>) => {
  const projectsList = data.allMarkdownRemark.nodes;
  console.log(projectsList);

  return (
    <Layout title="Projects">
      <PrintByYear list={projectsList} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/md-projects/" } }
    ) {
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
*/

import React from 'react';
import Layout from '../../components/Layout';

const Projects = () => {
  return <Layout title="Projects" />;
};

export default Projects;
