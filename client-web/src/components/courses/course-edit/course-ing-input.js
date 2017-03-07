import React, { PropTypes } from 'react';

import { SelectField, MenuItem, TextField, FlatButton } from 'material-ui';

const CourseIngInput = ({ ingredient, onChangeIngredientValue, ingredients, onDelete, onChangeIngredient }) => {
  return (
    <div>
      <SelectField
        style={{ verticalAlign: 'bottom' }}
        value={ingredient._id}
        floatingLabelText="רכיב"
        onChange={(e, key, selectedId) => onChangeIngredient(ingredient._id, selectedId)} >
        {
          ingredients.map(ing => <MenuItem value={ing._id} key={ing._id} primaryText={ing.name} />)
        }
      </SelectField>
      <TextField type="number"
        floatingLabelText="כמות"
        disabled={!ingredient._id}
        value={ingredient.value}
        id={'ing' + ingredient._id}
        onChange={({ target: { value } }) => onChangeIngredientValue(ingredient._id, value)} />
      <FlatButton label="X" onTouchTap={() => onDelete(ingredient._id)}/>
    </div>
  );
};

CourseIngInput.propTypes = {
  ingredient: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number,
  }),
  onChangeIngredientValue: PropTypes.func.isRequired,
  onChangeIngredient: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }))
}

export default CourseIngInput;