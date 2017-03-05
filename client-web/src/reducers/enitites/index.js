import { combineReducers } from 'redux';

import courses from './courses';
import ingredients from './ingredients';

export default combineReducers({
  courses,
  ingredients,
});