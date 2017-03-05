import * as Actions from '../../constants/actions';

export default function coursesEntitiesReducer(state = {}, {type, payload, error}) {
  switch (type) {
    case Actions.COURSES.RECEIVED_COURSES:
      return {
        ...payload.items.reduce((items, current) => {
          return {
            ...items,
            [current.id]: current,
          }
        }, {})
      }
    case Actions.COURSES.ADD_COURSE:
    case Actions.COURSES.UPDATE_COURSE:
      return {
        ...state,
        [payload.id]: payload,
      }
    case Actions.COURSES.DELETE_COURSE: 
      const newState = {...state};
      delete newState[payload.id];
      return newState;
    default:
      return state;
  }
}