import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";

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

const Component = ({ items }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = index => {
    setValue(index);
  };
  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {items.map(item => (
            <Tab key={item[0]} label={item[0]} icon={item[1]} />
          ))}
        </Tabs>
      </AppBar>
      {items.map(item => (
        <TabContainer key={item[0]}>{item[2]}</TabContainer>
      ))}
    </>
  );
};

export default Component;
