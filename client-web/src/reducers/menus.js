import {MENUS} from '../constants/actions';
import createItemIdReducer from './common/create-item-id-reducer';

const reducer = createItemIdReducer(MENUS);

const defaultState = {
  isFetching: false,
  items: [],
};

export default function menuReducer(state = defaultState, {type, payload, error}){
  return reducer(state, {type, payload, error})
}