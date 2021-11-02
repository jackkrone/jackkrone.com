import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h2 className="mb-3">Hello World (this site is a work in progress)</h2>
      <p>
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
        This project included a number of false starts. For instance, I
        considered using a Gatsby{' '}
        <a href="https://www.gatsbyjs.com/starters/">starter</a> but, after
        beginning development on one, was frustrated to discover it wasn't using
        v3 of Gatsby. Developing and maintaining this site is a long-term
        investment for me, so I wanted to be using the latest major release.
        Attempting to migrate the project from v2 to v3 was a headache, so I
        started over, and this time from zero. Literally, with{' '}
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
        . I had a heck of a time figuring out all the configuration and adding
        packages one-by-one, but in the end I may have learned more from the
        setup alone than from building the site. This gives me confidence in my
        ability to work on more complex projects in the future that can't rely
        on common boilerplate like{' '}
        <code
          style={{
            background: 'lightgrey',
            borderRadius: '4px',
            paddingLeft: '0.25em',
            paddingRight: '0.25em',
          }}
        >
          create-react-app
        </code>
        . I learned how to use a number of useful tools while getting everything
        set up, including nvm, react-helmet, and bootstrap-dark-5 (enables
        bootstrap with dark mode). I also learned how to persuade ESLint and
        Prettier to cooperate with the help of eslint-plugin-prettier.
      </p>
      <hr />
      <p>
        The inspiration for this site comes from{' '}
        <a href="https://training.kalzumeus.com/newsletters/archive/do-not-end-the-week-with-nothing">
          this
        </a>{' '}
        essay by Patrick McKenzie. Over time, I plan to configure my site to{' '}
        <a href="https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/">
          read markdown
        </a>{' '}
        so adding new content will be minimally intensive.
      </p>
    </Layout>
  );
};

export default Home;
