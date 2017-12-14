import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import ItemsContainer from '../common/items-container';
import IngredientsPage from './ingredients-page';
import AddIngredientPage from './add-ingredient-page';

import { fetchItemsIfNeeded } from '../../actions/ingredients';

const IngredientsContainer = ({ fetchItems, isFetching }) => (
  <ItemsContainer
    {...{ fetchItems, isFetching }}
    itemsPage={IngredientsPage}
    addItemPage={AddIngredientPage}
    itemsName="ingredients"
  />
);

IngredientsContainer.propTypes = {
  fetchItems: func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.ingredients.isFetching && state.courses.isFetching,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchItemsIfNeeded()),
  // .then(dispatch(fetchIngredientsIfNeeded()))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  IngredientsContainer
);
