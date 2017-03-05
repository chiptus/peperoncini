import React, { PropTypes } from 'react';

import ItemsList from '../../common/items-list';


const CoursesList = ({courses, deleteCourse, editCourse}) => {
  return (
    <ItemsList
      items={courses}
      editItem={editCourse}
      deleteItem={deleteCourse}
      newItemLink="/courses/add"
    />
  );
};

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  editCourse: PropTypes.func.isRequired,
};

export default CoursesList;