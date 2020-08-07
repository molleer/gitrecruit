import React, {useContext} from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {UserContext} from '../../contexts';

const Header = () => {
  const [user] = useContext(UserContext);
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
          {user ? (
            'You are logged in'
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
