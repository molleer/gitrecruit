import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar>
      <Toolbar
        style={{
          height: "5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src="logo.png" style={{ height: "4rem" }} />
        <Button color="inherit">Home</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
