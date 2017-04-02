import { MENUS, COURSES } from '../../constants/actions';
import createEntityReducer from '../common/create-entity-reducer';
import { removeSubDocFromState } from '../common/utils';

const baseReducer = createEntityReducer(MENUS);

export default function menusEntitiesReducer(state = {}, action) {
  if (!action.type || action.type.match(/^menus\//)) {
    return baseReducer(state, action);
  }
  if (action.type === COURSES.DELETE) {
    return removeSubDocFromState(state, 'courses');
  }

  return state;
}
