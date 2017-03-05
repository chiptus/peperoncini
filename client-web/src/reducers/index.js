import { combineReducers } from 'redux';

import courses from './courses';
import auth from './auth';
import entities from './enitites';
import ingredients from './ingredients'

export default combineReducers({
  courses,
  auth,
  entities,
  ingredients,
});
