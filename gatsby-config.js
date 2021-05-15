/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-graphql`,
            options: {
              typeName: `GCMS`,
              fieldName: `gcms`,
              url: process.env.GATSBY_GRAPHCMS_ENDPOINT,
              headers: {
                Authorization: `Bearer ${process.env.GATSBY_GRAPHCMS_TOKEN}`,
              }
            },
        },
    ],
    pathPrefix: "/hooker-and-eight-new",
}
