import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';

// import { connect } from 'react-redux';

// import {fetchCoursesIfNeeded} from '../actions/courses'

// import CoursesPage from './course-page';
// import AddCoursePage from './add-course';

class ItemsContainer extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    const {itemsName, itemsPage: ItemsPage, addItemPage: AddItemPage, children} = this.props;
    return (
      <div>
        <Switch>
          <Route path={`/${itemsName}/add`} render={({ push }) => <AddItemPage push={push} />} />
          <Route path={`/${itemsName}/edit/:id`} render={({ push, match: { params: { id } } }) => <AddItemPage {...{ push, id }} />} />
          <Route path={`/${itemsName}/`} render={({ push }) => <ItemsPage {...{ push }} />} />
        </Switch>
        {children}
      </div>
    );
  }
}

ItemsContainer.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  itemsName: PropTypes.string.isRequired,
  itemsPage: PropTypes.func.isRequired,
  addItemPage: PropTypes.func.isRequired,
};


export default ItemsContainer;