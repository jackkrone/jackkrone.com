import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h1>Hello World</h1>

      <p className="pt-2">
        I'm Jack. I created this site mainly as an opportunity to learn, but
        also as a place to share some projects and thoughts.
      </p>
      <p>
        First, a few notes on how I built this site. I used TypeScript and
        Gatsby, and I deployed it with Netlify. You might ask, "Why use
        TypeScript for such a simple site?" Well, because I wanted to learn how
        TypeScript works with React. I used Bootstrap 5 for styling, and I chose
        not to use react-bootstrap. Since Bootstrap 5 no longer uses jQuery,
        react-bootstrap is partially redundant. I already had experience using
        React style components anyways (using Material UI), so I used this
        project to learn how the authentic form of Bootstrap works.
      </p>
      <p>
        For an extra challenge I started this project from zero. Literally, with{' '}
        <code
          style={{
            background: 'lightgrey',
            borderRadius: '4px',
            paddingLeft: '0.25em',
            paddingRight: '0.25em',
          }}
        >
          npm init -y
        </code>
        . I had a heck of a time with all the configuration and adding packages
        one by one. I probably learned more from the setup alone than from the
        remainder of the process. I learned how to use a number of useful tools
        while getting everything set up, including nvm, react-helmet, and
        bootstrap-dark-5 (enables bootstrap with dark mode). I also learned how
        to get ESLint and Prettier to play nice together with the help of
        eslint-plugin-prettier.
      </p>
      <hr />
      <p>
        The inspiration for this site comes from{' '}
        <Link to="https://training.kalzumeus.com/newsletters/archive/do-not-end-the-week-with-nothing">
          this
        </Link>{' '}
        essay by Patrick McKenzie. Over time, I plan to configure my site to{' '}
        <Link to="https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/">
          read markdown
        </Link>{' '}
        so adding new content will be minimally intensive.
      </p>
    </Layout>
  );
};

export default Home;
