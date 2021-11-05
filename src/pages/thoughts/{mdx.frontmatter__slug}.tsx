import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/Layout';

const ThoughtsTemplate = ({ data }) => {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, html } = mdx;

  return (
    <Layout title={frontmatter.title}>
      <p>
        <strong>{frontmatter.date}</strong>
      </p>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default ThoughtsTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
