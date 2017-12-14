import React, { PropTypes } from 'react';

const IngredientListItem = ({ name, value, unit }) => {
  return <div>{`${value || 0} ${unit || 'יחידות'} ${name}`}</div>;
};

IngredientListItem.propTypes = {
  // _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  unit: PropTypes.string,
};

export default IngredientListItem;
