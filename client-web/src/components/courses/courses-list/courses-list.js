import React, { PropTypes } from 'react';

import ItemsList from '../../common/items-list';
import ItemContent from './course-list-item';

const CoursesList = ({ courses, deleteCourse, editCourse }) => {
  return (
    <ItemsList
      items={courses}
      editItem={editCourse}
      deleteItem={deleteCourse}
      newItemLink="/courses/add"
    >
      {item => <ItemContent {...item} />}
    </ItemsList>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteCourse: PropTypes.func.isRequired,
  editCourse: PropTypes.func.isRequired,
};

export default CoursesList;
