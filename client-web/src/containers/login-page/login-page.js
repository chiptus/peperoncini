import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatButton } from 'material-ui';

import { login } from '../../actions/auth';

const LoginPage = ({ login }) => {
  return (
    <div>
      <FlatButton label="התחבר עם Facebook" onTouchTap={login} />
    </div>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, { goBack }) => ({
  login: () => dispatch(login()).then(() => goBack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
