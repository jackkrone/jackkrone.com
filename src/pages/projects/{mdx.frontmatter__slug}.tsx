import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/Layout';

const ProjectsTemplate = ({ data }) => {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, body } = mdx;
  const date = new Date(frontmatter.date).toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Define image as path
  const image = frontmatter.featured.childImageSharp.original.src;

  return (
    <Layout
      title={frontmatter.title}
      pathName={`/${frontmatter.slug}`}
      image={image}
      description={frontmatter.description}
    >
      <p>
        <strong>{date}</strong>
      </p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default ProjectsTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        slug
        title
        description
        featured {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`;
