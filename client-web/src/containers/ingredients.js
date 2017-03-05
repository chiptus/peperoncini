import React, { Component, PropTypes } from 'react';

import { Switch, Route } from 'react-router-dom';
import IngredientsPage from './ingredients-page';
import AddIngredientPage from './add-ingredient-page';

import { connect } from 'react-redux';
import { fetchItemsIfNeeded } from '../actions/ingredients';

class IngredientsContainer extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div>
        {isFetching ? null :
          <Switch>
            <Route path="/ingredients/edit/:id" render={({ push, match: { params: { id } } }) => <AddIngredientPage {...{ push, id }} />} />
            <Route path="/ingredients/add" render={({ push }) => <AddIngredientPage {...{ push }} />} />
            <Route path="/ingredients/" render={({ push }) => <IngredientsPage {...{ push }} />} />
          </Switch>
        }
      </div>
    );
  }
}

IngredientsContainer.propTypes = {
  isFetching: PropTypes.bool,
  items: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  return ({
    // items: !state.ingredients.isFetching ? state.ingredients.items.map(id => state.entities.ingredients[id]) : [],
    isFetching: !state.ingredients.items.length,
  })
}

const mapActionsToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchItemsIfNeeded()),
})

export default connect(mapStateToProps, mapActionsToProps)(IngredientsContainer);