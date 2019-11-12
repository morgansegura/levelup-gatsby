/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const settings = require('./settings')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: settings.url,
    url: settings.url,
    nicename: settings.nicename,
    short: settings.short,
    alias: settings.alias,
    acronymn: settings.acronymn,
    title: settings.title,
    description: settings.description,
    keywords: settings.keywords,
    favicon: settings.favicon,
    logo: settings.logo,
    themeColor: settings.themeColor,
    backgroundColor: settings.backgroundColor,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `levelup.local`,
        protocol: `http`,
        hostingWPCOM: false,
        // excludedRoutes: ["**/media"],
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: settings.title,
        short_name: settings.short,
        description: settings.description,
        icon: settings.icon,
        start_url: `/`,
        background_color: settings.backgroundColor,
        theme_color: settings.themeColor,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ],
}
