import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = ({toggleDrawer, login}) => {
  return (
    <AppBar title="מחשבון כמויות" onLeftIconButtonTouchTap={toggleDrawer}>
      <button onClick={login}>Login</button>

    </AppBar>
  );
};

Header.propTypes = {
  toggleDrawer: React.PropTypes.func,
  login: React.PropTypes.func,
}

export default Header;