import React, { PropTypes } from 'react';

import SubItemInput from './sub-item-input';

const SubItemInputList = ({ selectedSubItems, ...props }) => {
  return (
    <div>
      {selectedSubItems.map((subItem, index) => (
        <SubItemInput key={index} {...props} subItem={subItem} />
      ))}
    </div>
  );
};

SubItemInputList.propTypes = {
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      unit: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  selectedSubItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
  onChangeSubItem: PropTypes.func.isRequired,
  onChangeSubItemValue: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SubItemInputList;
