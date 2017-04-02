import React, { Component }/*, { PropTypes } */ from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../../actions/menus';
import MenuList from '../../components/menus/menus-list/';

class MenusPage extends Component {
  editMenu = (id) => {
    this.props.push(`/menus/edit/${id}`);
  }

  deleteMenu = (id) => {
    this.props.deleteMenu(id);
  }

  render() {
    return (
      <div>
        <h1>תפריטים</h1>
        <MenuList
          menus={this.props.menus}
          editItem={this.editMenu}
          deleteItem={this.deleteMenu}
        />
      </div>
    );
  }
}

MenusPage.propTypes = {
  menus: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => {

  return ({
    menus: state.menus.items
      .map(id => state.entities.menus[id])
      .map(item => {
        return {
          ...item,
          courses: item.courses.map(ing => {
            // console.log(ing._id, state.entities.courses[ing._id])
            if (!state.entities.courses[ing._id]) {
              return ing;
            }
            return {
              _id: ing._id,
              value: ing.value,
            }
          })
        }
      }),

    //  ingredients: state.ingredients.items.map(id => state.entities.ingredients[id])
  });
}

const mapDispatchToProps = (dispatch) => ({
  deleteMenu: (courseId) => dispatch(deleteItem(courseId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenusPage);
