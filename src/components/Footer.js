import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { Github } from "mdi-material-ui";

const Footer = (props) => {
  const {
    company,
    contact: { email },
  } = props.data.site.siteMetadata;
  return (
    <>
      <Divider style={{ marginTop: "48px", marginBottom: "24px" }} />
      <footer
        id="footer"
        style={{ marginBottom: "24px", whiteSpace: "nowrap" }}
      >
        <div style={{ textAlign: "center" }}>
          <Typography component="span" variant="caption">
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
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton>
              <Github />
            </IconButton>
          </a>
        </div>
      </footer>
    </>
  );
};

export default () => (
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
    render={(data) => <Footer data={data} />}
  />
);
