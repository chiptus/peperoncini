import React from 'react';
import PropTypes from 'prop-types';
import { FlatButton } from 'material-ui';

const SignOut = ({ logout, username }) => {
  return (
    <FlatButton label={'התנתק'} onTouchTap={logout}>
      {username}
    </FlatButton>
  );
};

SignOut.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default SignOut;
