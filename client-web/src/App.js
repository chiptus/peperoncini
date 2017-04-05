import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// import PrivateRoute from './auth/components/private-route';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Header, Menu } from './components/layout';

import IngredientsContainer from './containers/ingredients';
import CoursesContainer from './containers/courses';
import MenusContainer from './containers/menus';

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
              <Header toggleDrawer={this.toggleDrawer} />
              <div className="content">
                <Route path="/menus" component={MenusContainer} />
                <Route path="/events" render={() => <div>events</div>} />
                <Route path="/ingredients" component={IngredientsContainer} />
                <Route path="/courses" component={CoursesContainer} />
                <Route exact path="/" render={() => <Redirect to="/menus" />} />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
