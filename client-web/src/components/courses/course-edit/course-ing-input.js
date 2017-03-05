import React, {PropTypes} from 'react';

import { SelectField, MenuItem, TextField } from 'material-ui';

const CourseIngInput = ({ ingredient, onChangeIngredientValue, ingredients, onDelete, onChangeIngredient }) => {
  return (
    <div>
      <SelectField 
        value={ingredient.id}
        floatingLabelText="רכיב" 
        onChange={(e, key, selectedId) => onChangeIngredient(ingredient.id, selectedId)} >
        {
          ingredients.map(ing => <MenuItem value={ing.id} key={ing.id} primaryText={ing.name} />)
        }
      </SelectField>
      <TextField type="number"
        disabled={!ingredient.id}
        value={ingredient.value}
        id={'ing' + ingredient.id}
        onChange={({target:{value}}) => onChangeIngredientValue(ingredient.id, value)}/>
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