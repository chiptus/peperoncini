import React, { PropTypes } from 'react';

import IngredientListItem from './ingredient-list-item';

const CourseItemContent = ({ description, ingredients }) => {
  return (
    <div>
      <div>
        {description}
      </div>
      <div>
        {ingredients.map(ing => <IngredientListItem {...ing} key={ing.id} />)}
      </div>

    </div>
  );
};

CourseItemContent.PropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    unit: PropTypes.string,
  }))
}

export default CourseItemContent;