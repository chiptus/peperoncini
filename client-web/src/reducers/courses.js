import { COURSES } from '../constants/actions';

const defaultState = {
  isFetching: false,
  items: [],
};


export default (state = defaultState, {type, ...action}) => {
  switch (type) {
    case COURSES.REQUEST_COURSES:
      return {
        ...state,
        isFetching: true,
      };
    case COURSES.RECEIVED_COURSES:
      return {
        ...state,
        isFetching: false,
        items: action.payload.items.map(({id}) => id),
        lastUpdated: action.payload.receivedAt,
      }
    case COURSES.ADD_COURSE:
      return {
        ...state,
        isFetching: false,
        lastUpdated: (new Date()).getTime(),
        items: [action.payload.id, ...state.items]
      };
    case COURSES.DELETE_COURSE: {
      return {
        ...state,
        isFetching: false,
        lastUpdated: (new Date()).getTime(),
        items: state.items.filter(itemId => itemId !== action.payload.id)        
      }
    }
    default:
      console.log('courses-reducer', type)
      return state;
  }
}