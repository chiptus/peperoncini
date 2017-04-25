import { combineReducers } from 'redux';

import courses from './courses';
import ingredients from './ingredients';
import menus from './menus';
import users from './users';

export default combineReducers({
  courses,
  ingredients,
  menus,
  users,
});
