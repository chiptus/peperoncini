import {MENUS} from '../../constants/actions';
import createEntityReducer from '../common/create-entity-reducer'

const baseReducer = createEntityReducer(MENUS);

export default function ingEntitiesReducer(state = {}, {type, payload, error}){
  return baseReducer(state, {type, payload, error});
}