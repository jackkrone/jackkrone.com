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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-6WTBPMKK9D`, // Google Analytics
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    {
      resolve: `gatsby-plugin-mdx`, // Setup resource: https://www.youtube.com/watch?v=9B8i_CAON_0
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1320, // specify max width of content container
            },
          },
        ],
      },
    },
    // The following two plugins apparently have to be the last two in the config file or will not function properly
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
