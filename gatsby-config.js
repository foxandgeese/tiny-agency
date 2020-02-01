module.exports = {
  // Customize me!
  siteMetadata: {
    company: "Fox and Geese",
    domain: "https://foxandgeese.com",
    defaultTitle: "Website Change Monitoring Products and Services",
    preamble:
      "We're a Portland, Oregon-based team of data scientists and software engineers.",
    defaultDescription:
      "We develop our own products. And provide software engineering and consulting to select clients.",
    postamble: "Think we can help your project? We'd love to hear from you:",
    contact: {
      email: "hi@foxandgeese.com",
    },
    menuLinks: [],
  },
  pathPrefix: "/tiny-agency",
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./images/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120162676-1",
      },
    },
  ],
};
