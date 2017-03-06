

export default function createEntityReducer(actions) {
  return function ingEntitiesReducer(state = {}, { type, payload, error }) {
    switch (type) {
      case actions.UPDATE:
      case actions.RECEIVED_ITEM:
      case actions.ADD:
        return {
          ...state,
          [payload.id]: {
            ...state[payload.id],
            ...payload,
          },
        };
      case actions.DELETE:
        return {
          ...state,
          [payload.id]: undefined,
        };
      case actions.RECEIVED_LIST:
        return {
          ...payload.reduce((items, current) => {
            return {
              ...items,
              [current.id]: current,
            }
          }, {})
        }

      case actions.FETCH_ITEM:
      case actions.REQUEST_DELETE:
      case actions.REQUEST_DELETE_FAIL:
      case actions.FETCH_ITEM_FAIL:
      case actions.FETCH_LIST:
      case actions.REQUEST_ADD:
      case actions.REQUEST_SAVE:
      case actions.REQUEST_UPDATE:
      case actions.FETCH_LIST_FAIL:
      case actions.REQUEST_ADD_FAIL:
      case actions.REQUEST_SAVE_FAIL:
      case actions.REQUEST_UPDATE_FAIL:
      default:
        return state;
    }
  }
}