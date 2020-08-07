import React, {useState, useEffect} from 'react';
import UserContext from '../contexts/User.context';
import PropTypes from 'prop-types';
import Axios from 'axios';

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Axios.get('/api/login/checkLogin')
      .then((res) => setUser(res.data))
      .catch((err) => setUser(null));
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
