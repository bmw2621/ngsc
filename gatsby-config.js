module.exports = {
  siteMetadata: {
    title: `North Georgia Security Consultants`,
    description: `North Georgia Security Consultants specialize in conducting vulnerability assessments on residential and commercial properties in order to evaluate potential shortfalls in security postures and procedures. Initial assessments/site surveys are conducted resulting in detailed information back briefs to our clients.`,
    author: `@bmw2621`,
    cardImage: `crest-c216a21823a8768e15fb8ab06df0b61d.svg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logoBlack2.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
