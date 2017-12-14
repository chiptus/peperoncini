const defaultState = {
  isFetching: false,
  items: [],
};

export default function createItemIdReducer(actions) {
  return itemIdReducer;

  function itemIdReducer(state = defaultState, { type, payload, error }) {
    if (!type) {
      return state;
    }
    return {
      ...state,
      isFetching: isFetchingReducer(state.isFetching, { type, payload }),
      items: itemsReducer(state.items, { type, payload }),
    };
  }

  function isFetchingReducer(isFetching = false, { type, payload }) {
    switch (type) {
      case actions.FETCH_LIST:
      case actions.FETCH_ITEM:
      case actions.REQUEST_ADD:
      case actions.REQUEST_SAVE:
      case actions.REQUEST_UPDATE:
      case actions.REQUEST_DELETE:
        return true;

      case actions.RECEIVED_ITEM:
      case actions.ADD:
      case actions.DELETE:
      case actions.UPDATE:
      case actions.FETCH_LIST_FAIL:
      case actions.RECEIVED_LIST:
      case actions.REQUEST_ADD_FAIL:
      case actions.REQUEST_SAVE_FAIL:
      case actions.REQUEST_UPDATE_FAIL:
      case actions.REQUEST_DELETE_FAIL:
      case actions.FETCH_ITEM_FAIL:
        return false;
      default:
        return isFetching;
    }
  }

  function itemsReducer(items = [], { type, payload, error }) {
    switch (type) {
      case actions.ADD:
        return addItem(items, payload._id);
      case actions.DELETE:
        return deleteItem(items, payload);
      case actions.RECEIVED_LIST:
        return payload.map(({ _id }) => _id);
      case actions.RECEIVED_ITEM:
        return [payload._id];

      case actions.FETCH_ITEM:
      case actions.REQUEST_DELETE:
      case actions.REQUEST_DELETE_FAIL:
      case actions.FETCH_ITEM_FAIL:
      case actions.UPDATE:
      case actions.REQUEST_ADD_FAIL:
      case actions.FETCH_LIST:
      case actions.REQUEST_ADD:
      case actions.REQUEST_SAVE:
      case actions.REQUEST_UPDATE:
      case actions.FETCH_LIST_FAIL:
      case actions.REQUEST_SAVE_FAIL:
      case actions.REQUEST_UPDATE_FAIL:
      default:
        return items;
    }
  }

  function addItem(items, id) {
    return [id, ...items];
  }

  function deleteItem(items, id) {
    return items.filter(itemId => itemId !== id);
  }
}
