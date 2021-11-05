import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

const Home = ({ data }) => {
  const sunrise = getImage(data.file);

  return (
    <Layout>
      <h2 className="mb-3">Hello World</h2>
      <div className="d-flex justify-content-center">
        <div className="mb-3 rounded-3" style={{ width: '90%' }}>
          <GatsbyImage
            image={sunrise}
            alt="Sunrise over the countryside"
            className="rounded-3"
          />
        </div>
      </div>
      <p>
        I’m Jack. Welcome to my personal site. I created this site primarily to
        share ideas that are too long for a twitter thread. I often write down
        useful things I learn because it helps me comprehend them better. By
        sharing some of these things publicly, I hope to think more clearly,
        spark fruitful conversations, and become a better communicator. I also
        use this site to share projects I’ve worked on and to learn new web
        development skills.
      </p>
      <p>
        Check out some of the things I’ve written and please share them if you
        know someone who would find them valuable. If you notice any mistakes or
        you disagree with something I’ve written, please{' '}
        <Link to="/connect">reach out</Link> and let me know. I want to
        cultivate the mindset that my opinions are works in progress. Nothing I
        say here is final, and I’m always willing to learn.
      </p>
    </Layout>
  );
};

export const query = graphql`
  query EarthImage {
    file(relativePath: { eq: "sunrise.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

export default Home;
