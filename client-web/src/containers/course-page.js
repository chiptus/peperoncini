import React, { Component }/*, { PropTypes } */ from 'react';
import { connect } from 'react-redux';

import { fetchCoursesIfNeeded, deleteCourse } from '../actions/courses';
import CourseList from '../components/courses/courses-list/courses-list';

class CoursesPage extends Component {
  componentWillMount() {
    this.props.fetchCourses();
  }

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

const mapStateToProps = (state) => ({
  courses: state.courses.items.map(item => state.entities.courses[item]),
});

const mapDispatchToProps = (dispatch) => ({
  deleteCourse: (courseId) => dispatch(deleteCourse(courseId)),
  fetchCourses: () => dispatch(fetchCoursesIfNeeded())
})

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
