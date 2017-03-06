import request from 'superagent';

export default function createDeleteItemActionCreators(serverUrl, actions, itemsName) {
  return {deleteItem}

  function deleteItem(itemId) {
    return dispatch => {
      dispatch(requestDeleteItem(itemId))
      return request
        .delete(`${serverUrl}/api/${itemsName}/${itemId}`)
        .then(
        request => dispatch(deleteItemSuccess(itemId)),
        error => dispatch(deleteItemFail(error))
        );
    }
  }
  /* DELETE ITEM */
  function requestDeleteItem(itemId) {
    return {
      type: actions.REQUEST_DELETE,
      payload: itemId,
    }
  }

  function deleteItemSuccess(itemId) {
    return {
      type: actions.DELETE,
      payload: itemId
    };
  }

  function deleteItemFail(error) {
    return {
      type: actions.REQUEST_DELETE_FAIL,
      payload: new Error(error),
      error: true,
    }
  }
}