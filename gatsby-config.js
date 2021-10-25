/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  /* About 1/5 down you can see instructions for setting up siteMetaData: https://blog.logrocket.com/set-up-a-typescript-gatsby-app/ */
  siteMetadata: {
    title: `Jack Krone`,
    description: `This site hosts my personal blog and project portfolio.`,
    author: `Jack Krone`,
    siteUrl: `https://jackkrone.com`,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects_md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thoughts`,
        path: `${__dirname}/src/thoughts_md`,
      },
    },
  ],
};
