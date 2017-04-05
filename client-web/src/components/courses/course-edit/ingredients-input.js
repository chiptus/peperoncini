import React, { PropTypes } from 'react';

import CourseIngInput from '../../common/sub-item-input-list/sub-item-input';

const CourseIngredientsList = (
  {
    ingredients,
    courseIngredients,
    onChangeIngredient,
    onChangeIngredientValue,
    onDelete,
  }
) => {
  return (
    <div>
      {courseIngredients.map((ingredient, index) => (
        <CourseIngInput
          key={index}
          onChangeSubItem={onChangeIngredient}
          onChangeSubItemValue={onChangeIngredientValue}
          onDelete={onDelete}
          subItem={ingredient}
          subItemName={'רכיב'}
          subItems={ingredients}
        />
      ))}
    </div>
  );
};

CourseIngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      unit: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  courseIngredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      value: PropTypes.number,
    })
  ),
  onChangeIngredient: PropTypes.func.isRequired,
  onChangeIngredientValue: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CourseIngredientsList;
