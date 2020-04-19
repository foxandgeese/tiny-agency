import React from "react";
import Page from "../components/Page";
import Typography from "@material-ui/core/Typography";

export default function Component() {
  return (
    <Page title="Not Found">
      <center>
        <Typography
          color="primary"
          component="span"
          gutterBottom
          paragraph
          variant="h3"
        >
          Hey! You just hit a page that doesn't exist.
        </Typography>
      </center>
    </Page>
  );
}
