import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router';

const GithubCallback = () => {
  const [user, setUser] = useState(null);

  const params = new URLSearchParams(window.location.search);
  useEffect(() => {
    Axios.get('/api/callback/github', {
      params: {
        code: params.get('code'),
      },
    })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return user ? <Redirect to="/" /> : null;
};

export default GithubCallback;
