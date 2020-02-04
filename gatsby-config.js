module.exports = {
  siteMetadata: {
    title: 'Yannick Lombart Curriculum Vitae',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Yannick Lombart Curriculum Vitae',
        short_name: 'CV',
        start_url: '.',
        background_color: '#efefef',
        theme_color: '#00ccb5',
        display: 'minimal-ui',
        icon: 'src/favicon.ico', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rubik Mono One`,
          `Noto Sans JP\:400,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
}
