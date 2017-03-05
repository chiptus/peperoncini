import { AUTH } from '../constants/actions';

const defaultState = {

}

export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_AUTHORIZED:
      return {
        ...state,
        user: action.payload
      };
    case AUTH.LOGOUT:
      return {};
    default:
      return state;
  }
}