import React from 'react';
import PropTypes from 'prop-types';
import { FlatButton } from 'material-ui';

const SignIn = ({ login }) => {
  return (
    <FlatButton
      backgroundColor="#7a7ad3"
      onTouchTap={login}
      label="התחבר באמצעות Facebook"
    />
  );
};

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};

export default SignIn;
