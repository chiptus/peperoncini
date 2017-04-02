import React, { PropTypes } from 'react';

// import IngredientListItem from './ingredient-list-item';

const ItemContent = ({ description, courses = [] }) => {
  return (
    <div>
      <div>
        <span>מחיר: </span>
        <span>
          {
            courses.reduce((sum, cur) => sum + (cur.price * cur.value), 0)
          }
        </span>
        <span> ש"ח </span>
      </div>

      <div>
        {description}
      </div>
      <div>
        {/*{courses.map(ing => <IngredientListItem {...ing} key={ing._id} />)}*/}
      </div>

    </div>
  );
};

ItemContent.PropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    price: PropTypes.number,
  }))
}

export default ItemContent;