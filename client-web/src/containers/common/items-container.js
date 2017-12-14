import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../auth/components/private-route';
// import { connect } from 'react-redux';

// import {fetchCoursesIfNeeded} from '../actions/courses'

// import CoursesPage from './course-page';
// import AddCoursePage from './add-course';

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const {
      itemsName,
      itemsPage: ItemsPage,
      addItemPage: AddItemPage,
      isFetching = true,
    } = this.props;
    return (
      <div>
        {!isFetching ? (
          <Switch>
            <PrivateRoute
              path={`/${itemsName}/add`}
              render={({ push }) => <AddItemPage push={push} />}
            />
            <PrivateRoute
              path={`/${itemsName}/edit/:id`}
              render={({ push, match: { params: { id } } }) => (
                <AddItemPage {...{ push, id }} />
              )}
            />
            <Route
              path={`/${itemsName}/`}
              render={({ push }) => <ItemsPage {...{ push }} />}
            />
          </Switch>
        ) : (
          <div>isFetching</div>
        )}
      </div>
    );
  }
}

ItemsContainer.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  itemsName: PropTypes.string.isRequired,
  itemsPage: PropTypes.func.isRequired,
  addItemPage: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default ItemsContainer;
