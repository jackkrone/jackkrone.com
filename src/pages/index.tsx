import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h1>Hello World</h1>

      <p>
        I'm Jack. I created this site mainly to learn, but also to share some
        thoughts that are too long for a twitter thread.
      </p>
      <p>
        First, a few notes on how I built this site: I used TypeScript and
        Gatsby. You might ask, "Why use TypeScript for such a simple site?"
        Well, because I wanted to learn how TypeScript works with React. I used
        Bootstrap 5 for styling, and I specifically chose not to use
        react-bootstrap for this project as Bootstrap 5 no longer uses jQuery
        anyways, which makes react-bootstrap partially redundant. Plus, I
        already had experience using true React style components with Material
        UI, so I used this project to learn authentic Bootstrap.
      </p>
      <p>
        For an extra challenge I started this project from zero. Literally, with
        `npm init y`. I had a heck of a time with all the configuration and
        adding packages one by one, but I also probably learned more from the
        setup alone than from the process of building the site. I also learned
        how to use a number of useful tools while getting everything set up,
        including nvm and react-helmet. I also learned how to get ESLint and
        Prettier to play nice together with the help of eslint-plugin-prettier.
      </p>
    </Layout>
  );
};

export default Home;
