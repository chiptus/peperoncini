import { combineReducers } from 'redux';

import courses from './courses';
import ingredients from './ingredients';
import menus from './menus';

export default combineReducers({
  courses,
  ingredients,
  menus,
});