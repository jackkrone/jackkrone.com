import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

import solarpunk from '../images/solarpunk.jpg';

const Home = () => {
  return (
    <Layout
      pathName="/home"
      title="Jack Krone"
      image={solarpunk}
      description="Jack Krone's portfolio and blog."
      home
    >
      <p>
        Welcome to my personal site. I created this site primarily to share
        ideas that are too long for a twitter thread. I often write down useful
        things I learn because it helps me comprehend them better. By sharing
        some of these things publicly, I hope to think more clearly and become a
        better communicator. I also use this site to share about projects I’ve
        worked on.
      </p>
      <p>
        Check out some of the things I’ve written and please share them if you
        know someone who would find them valuable. If you notice any mistakes or
        you disagree with something I’ve written, please{' '}
        <Link to="/connect">reach out</Link> and let me know. My opinions are
        all works in progress. Nothing I say here is final, and I’m always
        willing to learn.
      </p>
    </Layout>
  );
};

export default Home;
