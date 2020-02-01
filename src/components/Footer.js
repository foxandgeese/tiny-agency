import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { GithubCircle } from "mdi-material-ui";

const Footer = props => {
  const {
    company,
    contact: { email },
  } = props.data.site.siteMetadata;
  return (
    <>
      <Divider style={{ marginTop: "48px", marginBottom: "24px" }} />
      <footer
        style={{ marginBottom: "24px", whiteSpace: "nowrap" }}
        id="footer"
      >
        <div style={{ textAlign: "center" }}>
          <Typography variant="caption" component="span">
            ©{new Date().getFullYear()} {company}{" "}
            <Hidden only={["xs", "sm"]}>–</Hidden>
            <Hidden only={["xl", "lg", "md"]}>
              <br />
            </Hidden>{" "}
            {email}
          </Typography>
          <br />
          <a
            href="https://github.com/foxandgeese/tiny-agency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GithubCircle />
            </IconButton>
          </a>
        </div>
      </footer>
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            company
            contact {
              email
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
