import axios from 'axios';

export default function createAddItemActionCreators(
  serverUrl,
  actions,
  itemsName
) {
  return {
    addItem,
  };

  /* ADD ITEM */
  function addItem(item) {
    return dispatch => {
      dispatch(requestSaveItem(item));
      return axios
        .post(`${serverUrl}/api/${itemsName}`, item)
        .then(
          response => dispatch(addItemSuccess(response.data)),
          error => dispatch(addItemFail(error))
        );
    };
  }

  function addItemSuccess(item) {
    return {
      type: actions.ADD,
      payload: item,
    };
  }

  function requestSaveItem() {
    return {
      type: actions.REQUEST_ADD,
    };
  }

  function addItemFail(error) {
    return {
      type: actions.REQUEST_ADD_FAIL,
      payload: new Error(error),
      error: true,
    };
  }
}
