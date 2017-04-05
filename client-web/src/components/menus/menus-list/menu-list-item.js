import React, { PropTypes } from 'react';

// import IngredientListItem from './ingredient-list-item';
import ComponentsList from './components-list';

const ItemContent = ({ description, courses, ingredients }) => {
  return (
    <div>
      <div>
        <span>מחיר: </span>
        <span>
          {courses.reduce((sum, cur) => sum + cur.price * cur.value, 0)}
        </span>
        <span> ש"ח </span>
      </div>
      <div>
        {description}
      </div>
      <ComponentsList title="רשימת מנות" comps={courses} />
      <ComponentsList title="רשימת רכיבים" comps={ingredients} />
    </div>
  );
};

const CompsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  })
);

ItemContent.PropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: CompsPropType,
  courses: CompsPropType,
};

export default ItemContent;
