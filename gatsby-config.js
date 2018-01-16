module.exports = {
  siteMetadata: {
    title: 'Kayla Cohn | Software Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,500`
        ]
      }
    }
  ],
};
