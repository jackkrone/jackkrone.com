/* import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';

const ProjectsTemplate = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <p>
        <strong>{frontmatter.date}</strong>
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default ProjectsTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
*/
