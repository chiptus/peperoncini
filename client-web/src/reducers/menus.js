import {MENUS} from '../constants/actions';

const defaultState = {
  isFetching: false,
  items: [],
};

export default function menuReducer(state = defaultState, {type, payload, error}){
  switch (type) {
    default:
      return state;
  }
}