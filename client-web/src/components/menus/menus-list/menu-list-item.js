import React, { PropTypes } from 'react';

// import IngredientListItem from './ingredient-list-item';

const ItemContent = ({ description, courses = [] }) => {
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
      <h2> רשימת מנות</h2>
      <div>
        {courses.map(({ _id, name, value }) => (
          <div key={_id}>{`${value} ${name}`}</div>
        ))}
      </div>

    </div>
  );
};

ItemContent.PropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default ItemContent;
