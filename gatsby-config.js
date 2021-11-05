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
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /* {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/md-projects`,
      },
    }, */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thoughts`,
        path: `${__dirname}/src/md-thoughts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`, // This sets up manifest file for PWA generation, also handles favicon
      options: {
        name: `Jack Krone`,
        start_url: `/`,
        background_color: `#eeeeee`,
        theme_color: `#eeeeee`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`, // This caches pages, thereby enabling the web app to run when there is no connection
  ],
};
