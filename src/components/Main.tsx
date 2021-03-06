/*
This component is a bit unwieldly but for good reason. It uses short circuiting to decide whether or not to
display the homepage banner. The banner can't be placed in the home page itself because it needs to be placed
outside the container Main component's children go inside of.
*/

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

interface MainProps {
  children: React.ReactNode;
  home?: boolean;
}

const Main = ({ children, home = false }: MainProps) => {
  const { lightImage, darkImage } = useStaticQuery(
    graphql`
      query {
        lightImage: file(relativePath: { eq: "solarpunk.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        darkImage: file(relativePath: { eq: "solarpunk-dark.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    `
  );

  const sources = [
    { ...getImage(lightImage) },
    { ...getImage(darkImage), media: '(prefers-color-scheme: dark)' },
  ];

  return (
    <div className="col p-0">
      {home && (
        <BgImage
          image={sources}
          style={{ backgroundSize: 'cover', backgroundPosition: 'top' }}
          id="bg-image"
        >
          <div className="">
            <div
              style={{ marginTop: '2rem' }}
              className="d-flex my-0 mx-4 px-md-2 px-lg-5 overflow-hidden"
            >
              <div className="container p-0">
                <h1
                  className="position-absolute bottom-0"
                  style={{
                    textShadow: '3px 3px 5px black, 0px 0px 10px black',
                    color: '#f8f9fa',
                  }}
                >
                  Hello World
                </h1>
              </div>
            </div>
          </div>
        </BgImage>
      )}
      <div
        style={{ marginTop: '2rem' }}
        className="d-flex flex-column mx-4 px-md-2 px-lg-5 overflow-hidden"
      >
        <div className="container p-0">{children}</div>
      </div>
    </div>
  );
};

export default Main;
