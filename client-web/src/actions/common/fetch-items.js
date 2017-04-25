import axios from 'axios';

export default function createFetchItemsActionCreators(serverUrl, actions, itemsName, options = {}) {

  return {
    fetchItemsIfNeeded
  }


  function fetchItemsIfNeeded() {
    return (dispatch, getState) => {
      if (shouldFetchItems(getState())) {
        return dispatch(fetchItems());
      }
    }
  }

  /* FETCH ITEMS */
  function shouldFetchItems(state) {
    const itemsWrapper = state[itemsName + 's']; //TODO might be risky. maybe should change api name to plural? or otherwise state.entityname to singular
    if (!itemsWrapper || !itemsWrapper.items) {
      return true;
    }
    if (itemsWrapper.isFetching || itemsWrapper.items.length) {
      return false;
    }
    return true;
  }

  function fetchItems() {
    return dispatch => {
      dispatch(requestItems());
      return axios.get(`${serverUrl}/api/${itemsName}`)
        .then(
        response => dispatch(receiveItems(response.data)),
        error => dispatch(receiveItemsError(error))
        );
    }
  }

  function requestItems() {
    return {
      type: actions.FETCH_LIST,
    }
  }

  function receiveItems(items) {
    if (options.receiveItems) {
      return options.receiveItems(receiveItemsOriginal, items)
    }
    return receiveItemsOriginal(items)
  }

  function receiveItemsOriginal(items) {
    return {
      type: actions.RECEIVED_LIST,
      payload: items,
    }
  }

  function receiveItemsError(error) {
    return {
      type: actions.FETCH_LIST_FAIL,
      payload: new Error(error),
      error: true,
    }
  }
}