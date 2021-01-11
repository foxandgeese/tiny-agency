import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import List from "../components/List";
import Tabs from "../components/Tabs";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Alien } from "mdi-material-ui";
import { Robot } from "mdi-material-ui";
import logo from "../../images/logo.png";
import Avatar from "@material-ui/core/Avatar";

const styles = (theme) => ({
  angles: {
    color: theme.palette.secondary.light,
    opacity: 0.5,
    fontWeight: "normal",
  },
  avatar: {
    width: "160px",
    height: "160px",
    marginBottom: "40px",
    backgroundColor: theme.palette.primary.light,
  },
  logo: {
    width: "100px",
    height: "100px",
    border: "0",
  },
  text: {
    textAlign: "center",
  },
  h1: {
    fontSize: "5em",
  },
  h2: {
    fontSize: "1.6em",
    fontWeight: "normal",
  },
  tabs: {
    marginTop: "40px",
    marginBottom: "40px",
  },
});
const Home = (props) => {
  const {
    classes,
    data: {
      Products: { edges: products },
      Services: { edges: services },
      Basic: {
        siteMetadata: {
          domain,
          company,
          defaultTitle,
          preamble,
          postamble,
          defaultDescription,
          contact: { email },
        },
      },
    },
  } = props;
  return (
    <Page>
      <SEO title={defaultTitle}>
        <meta content={defaultDescription} name="description" />
        <link href={domain} rel="canonical" />
      </SEO>
      <div className={classes.text}>
        <center>
          <Avatar className={classes.avatar}>
            <a href={domain}>
              <img alt={company} className={classes.logo} src={logo} />
            </a>
          </Avatar>
        </center>
        <Typography
          className={classes.h1}
          color="primary"
          paragraph
          variant="h1"
        >
          <span className={classes.angles}>&lt;</span> hello{" "}
          <span className={classes.angles}>&gt;</span>
        </Typography>
        <Typography className={classes.h2} paragraph variant="h2">
          {preamble}
        </Typography>
        <Typography className={classes.h2} paragraph variant="h2">
          {defaultDescription}
        </Typography>
      </div>
      <div className={props.classes.tabs}>
        <Tabs
          items={[
            ["Our Products", <Robot />, <List items={products} />],
            ["Our Services", <Alien />, <List items={services} />],
          ]}
        />
      </div>
      <div className={classes.text}>
        <Typography paragraph variant="body1">
          {postamble}
        </Typography>
        <Typography color="primary" paragraph variant="h5">
          <span className={classes.angles}>&lt;</span> {email}{" "}
          <span className={classes.angles}>&gt;</span>
        </Typography>
      </div>
    </Page>
  );
};

export const query = graphql`
  query Name {
    Basic: site {
      siteMetadata {
        domain
        company
        defaultTitle
        preamble
        defaultDescription
        postamble
        contact {
          email
        }
      }
    }
    Products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            siteLink
            imageLink
            customWidth
            customTopPadding
          }
        }
      }
    }
    Services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            imageLink
          }
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(Home);
