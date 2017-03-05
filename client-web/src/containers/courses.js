import React, { PropTypes } from 'react';
// import { Switch, Route } from 'react-router-dom';


import { connect } from 'react-redux';

import ItemsContainer from './items-container';

import {fetchCoursesIfNeeded} from '../actions/courses'
import {fetchItemsIfNeeded as fetchIngredientsIfNeeded} from '../actions/ingredients';
import CoursesPage from './course-page';
import AddCoursePage from './add-course';


const CoursesContainer = ({fetchItems}) => (
  <ItemsContainer fetchItems={fetchItems} itemsPage={CoursesPage} addItemPage={AddCoursePage} itemsName="courses"/>
)

CoursesContainer.propTypes = {
  fetchItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchCoursesIfNeeded())
    .then(dispatch(fetchIngredientsIfNeeded()))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);