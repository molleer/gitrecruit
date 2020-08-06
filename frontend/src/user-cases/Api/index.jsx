import {useEffect} from 'react';

const apiBase = 'http://localhost:8080';

const Api = ({location}) => {
  useEffect(() => {
    window.location.href = apiBase + location.pathname + location.search;
  });
  return null;
};

export default Api;
