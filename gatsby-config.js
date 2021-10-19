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
  plugins: ['gatsby-plugin-typescript', 'gatsby-plugin-react-helmet'],
};
