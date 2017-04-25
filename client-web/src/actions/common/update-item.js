import axios from 'axios';

export default function createUpdateItemActionCreators(serverUrl, actions, itemsName) {
  return { updateItem };

  function updateItem(item) {
    return dispatch => {
      dispatch(requestUpdateItem(item));
      return axios.post(`${serverUrl}/api/${itemsName}/${item._id}`)
        .send(item)
        .then(
        response => dispatch(updateItemSuccess(response.data)),
        error => dispatch(updateItemFail(error)),
      )
    }
  }

  function requestUpdateItem(item) {
    return {
      type: actions.REQUEST_UPDATE,
      payload: item._id,
    }
  }

  function updateItemSuccess(item) {
    return {
      type: actions.UPDATE,
      payload: item,
    }
  }

  function updateItemFail(error) {
    return {
      type: actions.REQUEST_UPDATE_FAIL,
      payload: new Error(error),
      error: true,
    }
  }

}
