import { MENUS, COURSES } from '../../constants/actions';
import createEntityReducer from '../common/create-entity-reducer'

const baseReducer = createEntityReducer(MENUS);

export default function ingEntitiesReducer(state = {}, action) {
  if (!action.type || action.type.match(/^menus\//)) {
    return baseReducer(state, action);
  }
  if (action.type === COURSES.DELETE) {
    return {
      ...state,
      items: Object.keys(state).map()
    }
  }
}

function removeSubDocFromState(state, key) {
  return Object.keys(state).map(itemId => {
    return {
      ...state[itemId],
      [key]: state[itemId][key].filter(ing => ing._id !== action.payload._id)
    }
  }