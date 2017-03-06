import React, { Component }/*, { PropTypes } */ from 'react';
import { connect } from 'react-redux';

import { deleteCourse } from '../actions/courses';
import CourseList from '../components/courses/courses-list/courses-list';

class CoursesPage extends Component {
  editCourse = (id) => {
    this.props.push(`/courses/edit/${id}`);
  }

  deleteCourse = (id) => {
    this.props.deleteCourse(id);
  }

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
  courses: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  //console.log(state.entities);
  return ({
    courses: state.courses.items
      .map(id => state.entities.courses[id])
      .map(item => {
        return {
          ...item,
          ingredients: item.ingredients.map(ing => ({
            id: ing.id,
             name: state.entities.ingredients[ing.id] && state.entities.ingredients[ing.id].name,
            // unit: state.entities.ingredients[ing.id].unit,
            value: ing.value,
          }))
        }
      }),
  
  //  ingredients: state.ingredients.items.map(id => state.entities.ingredients[id])
});}

const mapDispatchToProps = (dispatch) => ({
  deleteCourse: (courseId) => dispatch(deleteCourse(courseId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
