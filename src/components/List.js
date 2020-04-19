import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
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

const Link = (props) =>
  props.siteLink ? (
    <a href={props.siteLink}>{props.children}</a>
  ) : (
    <>{props.children}</>
  );

const List = (props) => {
  const { classes } = props;
  return (
    <Grid
      alignItems="stretch"
      className={classes.grid}
      container
      justify="center"
      spacing={2}
    >
      {props.items.map((edge) => {
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
          <Grid item key={title} md={4} xs={12}>
            <Card className={classes.card}>
              {siteLink ? undefined : (
                <CardMedia className={classes.cardMedia} image={imageLink} />
              )}
              <CardContent>
                {siteLink ? (
                  <center>
                    <Link siteLink={siteLink}>
                      <img
                        alt={title}
                        className={classes.imageLink}
                        src={imageLink}
                        style={{
                          paddingTop: customTopPadding,
                          width: customWidth,
                        }}
                      />
                    </Link>
                  </center>
                ) : (
                  <Typography
                    className={classes.titleText}
                    component="h2"
                    gutterBottom
                    variant="h5"
                  >
                    <Link siteLink={siteLink}>{title}</Link>
                  </Typography>
                )}
                <Typography
                  component="div"
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
