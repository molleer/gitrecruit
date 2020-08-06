import React from 'react';
import {LoginWrapper} from './Login.style';
import {Card, Typography} from '@material-ui/core';
import GithubLoginButton from './elements/GithubLogin';

const Login = () => {
  return (
    <LoginWrapper>
      <Card
        style={{
          padding: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'column',
            height: '9rem',
          }}
        >
          <Typography variant="h5">Login/Register</Typography>
          <GithubLoginButton
            onClick={() => (window.location.href = '/api/login/github')}
          />
        </div>
      </Card>
    </LoginWrapper>
  );
};

export default Login;
