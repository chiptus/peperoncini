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
    menus: getMenus(state).map(menu => enhanceMenu(menu, state)),
  };
};

const mapDispatchToProps = dispatch => ({
  deleteMenu: courseId => dispatch(deleteItem(courseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenusPage);

function enhanceMenu(menu, state) {
  return {
    ...menu,
    courses: getMenuCourses(menu, state),
    ingredients: getMenuIngredients(menu, state),
  };
}

function getMenus({ menus, entities }) {
  return menus.items.map(id => entities.menus[id]);
}

function getMenuCourses(menu, { entities: { courses, ingredients } }) {
  return menu.courses.map(({ _id, value }) => {
    let course = courses[_id];
    if (!course) {
      return course;
    }
    return enhanceCourse(course, value, ingredients);
  });
}

function getMenuIngredients(menu, state) {
  const ingObj = getMenuIngredientsObject(menu, state);
  return Object.keys(ingObj).map(key => ingObj[key]);
}

function enhanceCourse(course, value, ingredients) {
  return {
    ...course,
    value,
    price: course.ingredients.reduce(
      (sum, ing) => sum + ing.value * ingredients[ing._id].price,
      0
    ),
  };
}

function getMenuIngredientsObject(
  menu,
  { entities: { courses, ingredients } }
) {
  return menu.courses.reduce((prev, { _id: courseId, value: courseValue }) => {
    let course = courses[courseId];
    if (!course) {
      return prev;
    }

    course.ingredients.forEach(({ _id, value }) => {
      if (!prev[_id]) {
        prev[_id] = Object.assign({}, ingredients[_id]);
        prev[_id].value = 0;
      }
      prev[_id].value += value * courseValue;
    });
    return prev;
  }, {});
}
