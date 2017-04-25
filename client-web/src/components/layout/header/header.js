import React from 'react';
import PropTypes from 'prop-types';

import { AppBar } from 'material-ui';
import SignIn from './sign-in';
import SignOut from './sign-out';

const Header = ({
  toggleDrawer,
  login,
  logout,
  isLoggedIn = false,
  username = '',
}) => {
  return (
    <AppBar
      title="מחשבון הכמויות של Peperoncini"
      onLeftIconButtonTouchTap={toggleDrawer}
      iconElementRight={
        isLoggedIn
          ? <SignOut {...{ logout, username }} />
          : <SignIn {...{ login }} />
      }
    />
  );
};

Header.propTypes = {
  toggleDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default Header;
