import React, {useEffect, useContext} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router';
import {UserContext} from '../../common/contexts';

const GithubCallback = () => {
  const [user, setUser] = useContext(UserContext);

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
    //eslint-disable-next-line
  }, []);

  return user ? <Redirect to="/" /> : null;
};

export default GithubCallback;
