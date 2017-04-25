import axios from 'axios';

export default function createDeleteItemActionCreators(serverUrl, actions, itemsName, options = {}) {
  return { deleteItem }

  function deleteItem(itemId) {
    return dispatch => {
      dispatch(requestDeleteItem(itemId))
      return axios
        .delete(`${serverUrl}/api/${itemsName}/${itemId}`)
        .then(
        request => dispatch(deleteItemSuccessWrapper(itemId)),
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

  function deleteItemSuccessWrapper(itemId) {
    if (!options.deleteItemSuccess) {
      return deleteItemSuccess(itemId);
    }
    return options.deleteItemSuccess(deleteItemSuccess, itemId);
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