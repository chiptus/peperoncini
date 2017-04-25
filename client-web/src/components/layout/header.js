import React from 'react';
import { AppBar, FlatButton } from 'material-ui';

const Header = ({ toggleDrawer, login }) => {
  return (
    <AppBar
      title="מחשבון הכמויות של Peperoncini"
      onLeftIconButtonTouchTap={toggleDrawer}
      iconElementRight={
        <FlatButton backgroundColor="#7a7ad3" onTouchTap={login}>התחבר באמצעות Facebook</FlatButton>
      }>
    </AppBar>
  );
};

Header.propTypes = {
  toggleDrawer: React.PropTypes.func,
  login: React.PropTypes.func,
};

export default Header;
