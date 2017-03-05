import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import PrivateRoute from './auth/components/private-route';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Header, Menu } from './components/layout';

import auth from './auth/auth';

import IngredientsContainer from './containers/ingredients';
import CoursesContainer from './containers/courses';

import theme from './theme';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false,
    }
  }

  toggleDrawer = () => {
    this.setState({ openDrawer: !this.state.openDrawer });
  }

  login = () => {
    auth.login();
  }

  test = () => {
    auth.test();
  }

  render() {
    return (
      <BrowserRouter >
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Menu openDrawer={this.state.openDrawer} toggleDrawer={this.toggleDrawer} />
            <div className="container">
              <Header toggleDrawer={this.toggleDrawer} />
              <div className="content">
                <Route path="/menus" render={() => <div>menu</div>} />
                <Route path="/events" render={() => <div>events</div>} />
                <Route path="/ingredients" component={IngredientsContainer} />
                <Route path="/courses" component={CoursesContainer} />

              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
