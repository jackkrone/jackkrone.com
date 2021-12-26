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
        Welcome to my personal site. I created this site to share ideas that are
        too long for a twitter thread. By sharing some insights and learnings
        publicly, I hope to think and communicate more clearly.
      </p>
      <p>
        If you notice any mistakes or you disagree with something I’ve written,
        please <Link to="/connect">reach out</Link> and let me know. My opinions
        are all works in progress.
      </p>
    </Layout>
  );
};

export default Home;
