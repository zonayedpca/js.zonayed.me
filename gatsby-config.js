module.exports = {
  siteMetadata: {
    title: `হাতেকলমে জাভাস্ক্রিপ্ট`,
    description: `সম্পূর্ণ বাংলায় জাভাস্ক্রিপ্ট শিখুন`,
    author: `@zonayedpca`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `হাতেকলমে জাভাস্ক্রিপ্ট`,
        short_name: `জাভাস্ক্রিপ্ট`,
        start_url: `/`,
        background_color: `#f0db4f`,
        theme_color: `#323330`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f0db4f`,
        showSpinner: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
