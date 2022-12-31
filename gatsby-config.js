/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteMetadata = {
  title: `Shaine's Tech Blog`,
  description: `Place for me to share new things I have learnt`,
  siteUrl: `https://www.yourdomain.tld`
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-theme-ui`,
    "gatsby-plugin-sass", 
    "gatsby-plugin-mdx", 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    }
  ]
};