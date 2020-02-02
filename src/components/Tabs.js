import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Component = ({ items }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
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
          variant="fullWidth"
        >
          {items.map(item => (
            <Tab key={item[0]} label={item[0]} icon={item[1]} />
          ))}
        </Tabs>
      </AppBar>
      {items.map((item, index) => {
        return (
          <span style={{ display: index !== value ? "none" : "" }} key={index}>
            {item[2]}
          </span>
        );
      })}
    </>
  );
};

export default Component;
