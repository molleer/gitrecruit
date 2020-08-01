import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar
        style={{
          height: "5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src="logo.png" alt="logo" style={{ height: "4rem" }} />
        <Button color="inherit">Home</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
