// import Item from '../common/items-list/item';

import React, { PropTypes } from 'react';

const IngredientItemContent = ({ name, price, unit, onDelete, onEdit }) => {
  return (
    <div>
      <div>
        <span>מחיר </span>
        <span>{price}</span>
      </div>
      <div>
        <span>יחידה </span>
        <span>{unit}</span>
      </div>
    </div>
  );
};

IngredientItemContent.propTypes = {
  // name: PropTypes.string.isRequired,
  price: PropTypes.number,
  unit: PropTypes.string,
  // onDelete: PropTypes.func.isRequired,
  // onEdit: PropTypes.func.isRequired,
};

export default IngredientItemContent;
