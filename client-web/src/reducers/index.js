import { combineReducers } from 'redux';

import courses from './courses';
import auth from './auth';
import entities from './enitites';
import ingredients from './ingredients';
import menus from './menus';
import events from './events';

export default combineReducers({
  courses,
  auth,
  entities,
  ingredients,
  menus,
  events,
  error: (state = '', action) => {
    if (action.error) {
      console.error(action.payload);
      return action.payload;
    }
    return '';
  },
});
