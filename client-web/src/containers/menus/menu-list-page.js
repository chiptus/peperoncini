import React, { Component /*, { PropTypes } */ } from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../../actions/menus';
import MenuList from '../../components/menus/menus-list/';

class MenusPage extends Component {
  editMenu = id => {
    this.props.push(`/menus/edit/${id}`);
  };

  deleteMenu = id => {
    this.props.deleteMenu(id);
  };

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
  menus: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    menus: state.menus.items.map(id => state.entities.menus[id]).map(item => {
      return {
        ...item,
        courses: item.courses.map(({ _id, value }) => {
          let course = state.entities.courses[_id];
          if (!course) {
            return course;
          }
          return {
            ...course,
            value,
            price: course.ingredients.reduce(
              (sum, ing) =>
                sum + ing.value * state.entities.ingredients[ing._id].price,
              0
            ),
          };
        }),
      };
    }),
  };
};

const mapDispatchToProps = dispatch => ({
  deleteMenu: courseId => dispatch(deleteItem(courseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenusPage);
