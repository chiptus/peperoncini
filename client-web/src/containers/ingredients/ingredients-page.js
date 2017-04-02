import React, { Component }/*, { PropTypes } */ from 'react';
import { connect } from 'react-redux';

import ItemsList from '../../components/common/items-list';
import ItemContent from '../../components/ingredients/ingredient-item';

import { deleteItem } from '../../actions/ingredients';

const itemsName = 'ingredients';

class IngredientsPage extends Component {
  editItem = (id) => {
    this.props.push(`/${itemsName}/edit/${id}`);
  }

  deleteItem = (id) => {
    this.props.deleteItem(id);
  }

  render() {
    return (
      <div>
        <h1>רכיבים</h1>
        <ItemsList
          items={this.props.items}
          editItem={this.editItem}
          deleteItem={this.deleteItem}
          newItemLink={`/${itemsName}/add`}>
          {
            (item) => <ItemContent {...item} />
          }
        </ItemsList>
      </div>
    );
  }
}

IngredientsPage.propTypes = {
  items: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.ingredients.items.map(item => state.entities.ingredients[item]),
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (ItemId) => dispatch(deleteItem(ItemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsPage);
