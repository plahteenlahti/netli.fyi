module.exports = {
  siteMetadata: {
    title: `Deploys: Manage your Netlify Sites`,
    description: `Deploys: Manage your Netlify sites on the go. An app designed and built for iOS and Android by Perttu Lähteenlahti`,
    author: `@plahteenlahti`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112021087-8",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deploys`,
        short_name: `Deploys`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gradient.png`,
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
  ],
}
