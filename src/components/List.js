import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    height: "100%",
  },
  cardMedia: {
    height: "150px",
  },
  titleText: {
    textAlign: "center",
  },
  imageLink: {
    border: 0,
    width: "80%",
    paddingTop: "40px",
    paddingBottom: "20px",
  },
});

const Link = props =>
  props.siteLink ? (
    <a href={props.siteLink}>{props.children}</a>
  ) : (
    <>{props.children}</>
  );

const List = props => {
  const { classes } = props;
  return (
    <Grid
      spacing={2}
      container
      justify="center"
      alignItems="stretch"
      className={classes.grid}
    >
      {props.items.map(edge => {
        const {
          node: {
            html,
            frontmatter: {
              title,
              siteLink,
              imageLink,
              customWidth,
              customTopPadding,
            },
          },
        } = edge;
        return (
          <Grid item xs={12} md={4} key={title}>
            <Card className={classes.card}>
              {siteLink ? (
                undefined
              ) : (
                <CardMedia image={imageLink} className={classes.cardMedia} />
              )}
              <CardContent>
                {siteLink ? (
                  <center>
                    <Link siteLink={siteLink}>
                      <img
                        src={imageLink}
                        alt={title}
                        className={classes.imageLink}
                        style={{
                          paddingTop: customTopPadding,
                          width: customWidth,
                        }}
                      />
                    </Link>
                  </center>
                ) : (
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.titleText}
                  >
                    <Link siteLink={siteLink}>{title}</Link>
                  </Typography>
                )}
                <Typography
                  component="p"
                  dangerouslySetInnerHTML={{ __html: html }}
                  variant="body2"
                />
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(styles)(List);
