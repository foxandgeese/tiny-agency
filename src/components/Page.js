import React from "react";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";
import { Style } from "react-style-tag";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  topper: {
    backgroundColor: "#eee",
  },
  root: {
    maxWidth: "1168px",
    marginTop: "94px",
  },
});

const Component = ({ children, classes }) => {
  return (
    <div className={classes.topper}>
      <Style>{`
      body {background: #eee}
    `}</Style>
      <Grid container justify="center" alignItems="stretch">
        <Grid item xs className={classes.root}>
          {children}
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Component);
