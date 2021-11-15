/*
This is a key custom component. It enables the use of images within mdx files that have a max-width.
Currently there is no good gatsby plugin solution for achieving this.
gatsby-remark-images automatically sets the image to the full width of the container.
This component works by querying ALL images in the src/images directory (image sharp directory).
As a result, it will slow down massive builds. As the project grows, it may be useful to query only
images to be used in mdx files by placing them all in a mdx-images directory within src/images.
There is still a place for gatsby-remark-images: when you know you want the image to fill the container.
MdxImage has a default responsive width define by the mdx-images css class.
It can be overridden with the maxWidth prop, which supports pixels or percentages as a string.
*/

import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

interface MdxImageProps {
  fileName: string;
  alt: string;
  maxWidth?: string;
  caption?: string;
}

const MdxImage = ({
  fileName,
  alt,
  maxWidth = '',
  caption = '',
}: MdxImageProps) => {
  const { allImageSharp } = useStaticQuery(
    graphql`
      query MdxImages {
        allImageSharp {
          nodes {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    `
  );

  // Get optimized image
  const image = getImage(
    allImageSharp.nodes.find(elem =>
      elem.gatsbyImageData.images.fallback.src.includes(fileName)
    )
  );
  // Get src to original image
  // This procedure is unwieldy as I could get src from the image var
  // Typescript doesn't like it though
  const node = allImageSharp.nodes.find(elem =>
    elem.gatsbyImageData.images.fallback.src.includes(fileName)
  );
  const { src } = node.gatsbyImageData.images.fallback;

  // set width if maxWidth was passed as an argument
  // this overrides the mdx-image class
  let width = {};
  if (maxWidth) {
    width = { maxWidth };
  }

  // set caption if caption was passed as an argument
  let styledCaption: JSX.Element | null = null;
  if (caption) {
    styledCaption = (
      <div style={width} className="mdx-image">
        <em className="text-muted">{caption}</em>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center my-4">
      <div style={width} className="mdx-image">
        <Link to={src}>
          <GatsbyImage image={image} alt={alt} />
        </Link>
      </div>
      {styledCaption}
    </div>
  );
};

export default MdxImage;
