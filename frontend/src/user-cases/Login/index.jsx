import React from 'react';
import {LoginWrapper} from './Login.style';
import {Card, CardActionArea, Typography} from '@material-ui/core';
import GithubLoginButton from './elements/GithubLogin';

const Login = () => {
  return (
    <LoginWrapper>
      <Card
        style={{
          padding: '1rem',
        }}
      >
        <CardActionArea
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            height: '9rem',
          }}
        >
          <Typography variant="h5">Login/Register</Typography>
          <GithubLoginButton />
        </CardActionArea>
      </Card>
    </LoginWrapper>
  );
};

export default Login;
