import React, { PropTypes } from 'react';

import { SelectField, MenuItem, TextField, FlatButton } from 'material-ui';

const SubItemInput = (
  {
    subItem,
    onChangeSubItemValue,
    subItems,
    onDelete,
    onChangeSubItem,
    subItemName,
  }
) => {
  return (
    <div>
      <SelectField
        style={{ verticalAlign: 'bottom' }}
        value={subItem._id}
        floatingLabelText={subItemName}
        onChange={(e, key, selectedId) =>
          onChangeSubItem(subItem._id, selectedId)}>
        {subItems.map(ing => (
          <MenuItem value={ing._id} key={ing._id} primaryText={ing.name} />
        ))}
      </SelectField>
      <TextField
        type="number"
        floatingLabelText="כמות"
        disabled={!subItem._id}
        value={subItem.value}
        step="0.1"
        id={'ing' + subItem._id}
        onChange={({ target: { value } }) => {
          if (value < 0) {
            return;
          }
          onChangeSubItemValue(subItem._id, value);
        }}
      />
      <FlatButton label="X" onTouchTap={() => onDelete(subItem._id)} />
    </div>
  );
};

SubItemInput.propTypes = {
  subItem: PropTypes.shape({
    _id: PropTypes.string,
    value: PropTypes.number,
  }),
  onChangeSubItemValue: PropTypes.func.isRequired,
  onChangeSubItem: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SubItemInput;
