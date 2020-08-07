import React, {useContext} from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {UserContext} from '../../contexts';
import Axios from 'axios';

const Header = () => {
  const [user] = useContext(UserContext);

  const handleLogout = () => {
    Axios.post('/api/logout')
      .then(() => (window.location.href = '/'))
      .catch(() => (window.location.href = '/'));
  };

  return (
    <AppBar position="sticky">
      <Toolbar
        style={{
          height: '5rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <img src="/logo.png" alt="logo" style={{height: '4rem'}} />
        <div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {user ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
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
