import request from 'superagent';

export default function createFetchItemsActionCreators(serverUrl, actions, itemsName) {
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
    const itemsWrapper = state[itemsName];
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
      return request.get(`${serverUrl}/api/${itemsName}`)
        .then(
        response => dispatch(receiveItems(response.body)),
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