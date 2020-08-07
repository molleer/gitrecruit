import React from 'react';
import PropTypes from 'prop-types';
import UserProvider from './User.provider';

const Providers = ({children}) => <UserProvider>{children}</UserProvider>;

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
