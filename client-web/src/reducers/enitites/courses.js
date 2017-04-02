import createEntityReducer from '../common/create-entity-reducer';

import { COURSES, INGREDIENTS } from '../../constants/actions';
import { removeSubDocFromState } from '../common/utils';
const courseEntityReducer = createEntityReducer(COURSES);

export default (state = {}, action) => {
  if (!action.type || action.type.match(/^courses\//)) {
    return courseEntityReducer(state, action);
  }
  switch (action.type) {
    case INGREDIENTS.DELETE:
      return removeSubDocFromState(state, 'ingredients', action.payload._id);
    default:
      return state;
  }
};
