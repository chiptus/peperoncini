import request from 'superagent';

import { SERVER_URL } from '../config';
import { INGREDIENTS } from '../constants/actions';

const itemsName = 'ingredient';

export function addOrUpdateItem(item) {
  return item.id ? updateItem(item) : addItem(item);
}

export function fetchItemsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState())) {
      return dispatch(fetchItems());
    }
  }
}

export function deleteItem(itemId) {
  return dispatch => {
    dispatch(requestDeleteItem(itemId))
    return request
      .delete(`${SERVER_URL}/api/${itemsName}/${itemId}`)
      .then(
      request => dispatch(deleteItemSuccess(itemId)),
      error => dispatch(deleteItemFail(error))
      );
  }
}

export function fetchItem(itemId) {
  return dispatch => {
    dispatch(requestFetchItem(itemId));
    return request
      .get(`${SERVER_URL}/api/${itemsName}/${itemId}`)
      .then(
        response => {
          dispatch(fetchItemSuccess(response.body));
          return response.body;
        },
        error => {
          dispatch(fetchItemFailed(error))
          throw error;
        }
      );

  }

}

function requestFetchItem(itemId) {
  return {
    type: INGREDIENTS.FETCH_ITEM,
    payload: itemId,
  };
}

function fetchItemSuccess(item) {
  return {
    type: INGREDIENTS.RECEIVED_ITEM,
    payload: item,
  };
}

function fetchItemFailed(error) {
  return {
    type: INGREDIENTS.FETCH_ITEM_FAIL,
    payload: new Error(error),
    error: true,
  };
}

/* FETCH ITEM */


/* DELETE ITEM */
function requestDeleteItem(itemId) {
  return {
    type: INGREDIENTS.REQUEST_DELETE,
    payload: itemId,
  }
}

function deleteItemSuccess(itemId) {
  return {
    type: INGREDIENTS.DELETE,
    payload: itemId
  };
}

function deleteItemFail(error) {
  return {
    type: INGREDIENTS.REQUEST_DELETE_FAIL,
    payload: new Error(error),
    error: true,
  }
}


/* ADD ITEM */
function addItem(item) {
  return dispatch => {
    dispatch(requestSaveItem(item));
    return request.post(`${SERVER_URL}/api/${itemsName}`)
      .send(item)
      .then(
      response => dispatch(addItemSuccess(response.body)),
      error => dispatch(addItemFail(error)),
    )
  }
}

function addItemSuccess(item) {
  return {
    type: INGREDIENTS.ADD,
    payload: item,
  }
}

function requestSaveItem() {
  return {
    type: INGREDIENTS.REQUEST_ADD,
  }
}

function addItemFail(error) {
  return {
    type: INGREDIENTS.REQUEST_ADD_FAIL,
    payload: new Error(error),
    error: true,
  }
}

function updateItem(item) {
  return dispatch => {
    dispatch(requestUpdateItem(item));
    return request.post(`${SERVER_URL}/api/${itemsName}/${item.id}`)
      .send(item)
      .then(
      response => dispatch(updateItemSuccess(response.body)),
      error => dispatch(updateItemFail(error)),
    )
  }
}

function requestUpdateItem(item) {
  return {
    type: INGREDIENTS.REQUEST_UPDATE,
    payload: item.id,
  }
}

function updateItemSuccess(item) {
  return {
    type: INGREDIENTS.UPDATE,
    payload: item,
  }
}

function updateItemFail(error) {
  return {
    type: INGREDIENTS.REQUEST_UPDATE_FAIL,
    payload: new Error(error),
    error: true,
  }
}

/* FETCH ITEMS */
function shouldFetchItems(state) {
  const itemsWrapper = state['ingredients'];
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
    return request.get(`${SERVER_URL}/api/ingredient`)
      .then(
      response => dispatch(receiveItems(response.body)),
      error => dispatch(receiveItemsError(error))
      );
  }
}

function requestItems() {
  return {
    type: INGREDIENTS.FETCH_LIST,
  }
}

function receiveItems(items) {
  return {
    type: INGREDIENTS.RECEIVED_LIST,
    payload: items,
  }
}

function receiveItemsError(error) {
  return {
    type: INGREDIENTS.FETCH_LIST_FAIL,
    payload: new Error(error),
    error: true,
  }
}