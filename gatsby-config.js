module.exports = {
  // Customize me!
  siteMetadata: {
    company: "Fox and Geese",
    domain: "https://foxandgeese.com",
    defaultTitle: "Fox and Geese: a digital agency offering serverless + react.js development",
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
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "FoxAndGeese",
        short_name: "FoxAndGeese",
        start_url: "/",
        background_color: "#eeeeee",
        //theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "images/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        //crossOrigin: `use-credentials`,
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
