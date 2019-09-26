module.exports = {
  siteMetadata: {
    title: `Jordan Winslow - Front End Web Developer React GraphQL Demo`,
    description: `I Help Business Owners Create Beautiful and Blazing Fast Websites, Apps, Branding and Rank Highly in Search Engine Results!`,
    keywords: `Front End Web Developer, Freelancer, For Hire, Hire, UI Designer, UX Specialist, Web Designer, JavaScript Programmer, React Developer, App Developer, Jordan Winslow`,
    author: `@jordandwinslow <admin@jordanwinslow.me>`,
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
        name: `modern-web-design-showcase-1`,
        short_name: `showcase-1`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-sacredgeometry.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
