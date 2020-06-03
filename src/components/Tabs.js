import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Component = ({ items }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar color="default" position="static">
        <Tabs
          centered
          indicatorColor="primary"
          onChange={handleChange}
          textColor="primary"
          value={value}
          variant="fullWidth"
        >
          {items.map((item) => (
            <Tab icon={item[1]} key={item[0]} label={item[0]} />
          ))}
        </Tabs>
      </AppBar>
      <p />
      {items.map((item, index) => {
        return (
          <span key={index} style={{ display: index !== value ? "none" : "" }}>
            {item[2]}
          </span>
        );
      })}
    </>
  );
};

export default Component;
