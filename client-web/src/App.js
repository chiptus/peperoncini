import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { authDiscardToken, login } from './actions/auth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Header, Menu } from './components/layout';

import IngredientsContainer from './containers/ingredients';
import CoursesContainer from './containers/courses';
import MenusContainer from './containers/menus';
import LoginPage from './containers/login-page';
import theme from './theme';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false,
    };
  }

  toggleDrawer = () => {
    this.setState({ openDrawer: !this.state.openDrawer });
  };

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Menu
              openDrawer={this.state.openDrawer}
              toggleDrawer={this.toggleDrawer}
            />
            <div className="container">
              <Header
                toggleDrawer={this.toggleDrawer}
                login={this.props.login}
                logout={this.props.logout}
                isLoggedIn={this.props.isLoggedIn}
                username={this.props.username}
              />
              <div className="content">
                <Route path="/menus" component={MenusContainer} />
                <Route path="/events" render={() => <div>events</div>} />
                <Route path="/ingredients" component={IngredientsContainer} />
                <Route path="/courses" component={CoursesContainer} />
                <Route path="/login" component={LoginPage} />
                <Route exact path="/" render={() => <Redirect to="/menus" />} />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.auth.token,
  username: !!state.auth.token
    ? state.entities.users[state.auth.userId].name
    : '',
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  logout: () => dispatch(authDiscardToken()),
  // checkLogin: () => dispatch(checkLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
