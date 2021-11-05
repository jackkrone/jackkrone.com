import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h2 className="mb-3">Hello World</h2>
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
        you disagree with something I’ve written, please reach out and let me
        know. I want to cultivate the mindset that my opinions are works in
        progress. Nothing I say here is final, and I’m always willing to learn.
      </p>
    </Layout>
  );
};

export default Home;
