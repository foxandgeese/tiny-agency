import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const TabContainer = ({ children, dir }) => {
  return (
    <Typography
      component="div"
      dir={dir}
      style={{ height: "100%", padding: 8 * 3 }}
    >
      {children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {},
});

class MyTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme, items } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {items.map(item => (
              <Tab key={item[0]} label={item[0]} icon={item[1]} />
            ))}
          </Tabs>
        </AppBar>
        <>
          {items.map(item => (
            <TabContainer key={item[0]} dir={theme.direction}>
              {item[2]}
            </TabContainer>
          ))}
        </>
      </div>
    );
  }
}

MyTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MyTabs);
