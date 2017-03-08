import createEntityReducer from '../common/create-entity-reducer';

import { COURSES, INGREDIENTS } from '../../constants/actions';

const courseEntityReducer = createEntityReducer(COURSES);

export default (state = {}, action) => {
  if (!action.type || action.type.match(/^courses\//)) {
    return courseEntityReducer(state, action);
  }
  switch (action.type) {
    case INGREDIENTS.DELETE:
      return Object.assign({}, state, {
        items: Object.keys(state).map(courseId => {
          return {
            ...state[courseId],
            ingredients: state[courseId].ingredients.filter(ing => ing._id !== action.payload._id)
          }
        })
      })
    default:
      return state;
  }
}
