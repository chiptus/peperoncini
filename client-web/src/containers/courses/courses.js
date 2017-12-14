import React, { PropTypes } from 'react';
// import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import ItemsContainer from '../common/items-container';

import { fetchItemsIfNeeded as fetchCoursesIfNeeded } from '../../actions/courses';

import CoursesPage from './course-page';
import AddCoursePage from './add-course';

const CoursesContainer = ({ fetchItems, isFetching }) => (
  <ItemsContainer
    {...{ fetchItems, isFetching }}
    itemsPage={CoursesPage}
    addItemPage={AddCoursePage}
    itemsName="courses"
  />
);

CoursesContainer.propTypes = {
  fetchItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.ingredients.isFetching && state.courses.isFetching,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchCoursesIfNeeded()),
  // .then(dispatch(fetchIngredientsIfNeeded()))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
