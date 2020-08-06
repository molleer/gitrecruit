import React from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar
        style={{
          height: '5rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <img src="logo.png" alt="logo" style={{height: '4rem'}} />
        <div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
