import React, {useState} from 'react';
import UserContext from '../contexts/User.context';
import PropTypes from 'prop-types';

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
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
