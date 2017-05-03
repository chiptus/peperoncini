import React, { Component /*, { PropTypes } */ } from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../../actions/courses';
import CourseList from '../../components/courses/courses-list/courses-list';

class CoursesPage extends Component {
  editCourse = id => {
    this.props.push(`/courses/edit/${id}`);
  };

  deleteCourse = id => {
    this.props.deleteCourse(id);
  };

  render() {
    return (
      <div>
        <h1>מנות</h1>
        <CourseList
          courses={this.props.courses}
          editCourse={this.editCourse}
          deleteCourse={this.deleteCourse}
        />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    courses: state.courses.items
      .map(id => state.entities.courses[id])
      .map(item => {
        return {
          ...item,
          ingredients: item.ingredients.map(ing => {
            if (!state.entities.ingredients[ing._id]) {
              return ing;
            }
            return {
              _id: ing._id,
              name: state.entities.ingredients[ing._id].name,
              unit: state.entities.ingredients[ing._id].unit,
              price: state.entities.ingredients[ing._id].price,
              value: ing.value,
            };
          }),
        };
      }),

    //  ingredients: state.ingredients.items.map(id => state.entities.ingredients[id])
  };
};

const mapDispatchToProps = dispatch => ({
  deleteCourse: courseId => dispatch(deleteItem(courseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
