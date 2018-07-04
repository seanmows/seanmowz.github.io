module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Sean Mowrey',
    description: 'enthusiastic engineering student',
    keywords: 'full stack developer, mechanical engineering, inter, portfolio, personal website',
    url: 'https://seanmowz.github.io'
  }
};
