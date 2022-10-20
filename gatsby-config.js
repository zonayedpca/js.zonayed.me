const siteUrl = `https://js.zonayed.me`

module.exports = {
  siteMetadata: {
    title: `হাতেকলমে জাভাস্ক্রিপ্ট`,
    description: `সম্পূর্ণ বাংলায় জাভাস্ক্রিপ্ট শিখুন`,
    author: `@zonayedpca`,
    siteUrl,
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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `হাতেকলমে জাভাস্ক্রিপ্ট`,
    //     short_name: `জাভাস্ক্রিপ্ট`,
    //     start_url: `/`,
    //     background_color: `#f0db4f`,
    //     theme_color: `#323330`,
    //     display: `fullscreen`,
    //     icon: `src/assets/images/icon.png`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f0db4f`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: `${siteUrl}`,
    //     sitemap: `${siteUrl}/sitemap.xml`,
    //   },
    // },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
  ],
}
