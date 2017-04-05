export default function createActionsConstants(namespace) {
  if (!namespace) {
    throw new Error('Missing name space for action types');
  }

  return {
    //unit - callbacks
    ADD: namespace + '/ADD',
    UPDATE: namespace + '/UPDATE',
    DELETE: namespace + '/DELETE',
    RECEIVED_ITEM: namespace + '/RECEIVED_ITEM',

    //list - callbacks
    RECEIVED_LIST: namespace + '/RECEIVED_LIST',

    //async loaders
    FETCH_LIST: namespace + '/FETCH_LIST',
    FETCH_ITEM: namespace + '/FETCH_ITEM',
    REQUEST_UPDATE: namespace + '/REQUEST_UPDATE',
    REQUEST_ADD: namespace + '/REQUEST_ADD',
    REQUEST_SAVE: namespace + '/REQUEST_SAVE',
    REQUEST_DELETE: namespace + '/REQUEST_DELETE',

    //errors
    FETCH_LIST_FAIL: namespace + '/FETCH_LIST_FAIL',
    FETCH_ITEM_FAIL: namespace + '/FETCH_ITEM_FAIL',
    REQUEST_DELETE_FAIL: namespace + '/REQUEST_DELETE_FAIL',
    REQUEST_UPDATE_FAIL: namespace + '/REQUEST_UPDATE_FAIL',
    REQUEST_ADD_FAIL: namespace + '/REQUEST_ADD_FAIL',
    REQUEST_SAVE_FAIL: namespace + '/REQUEST_SAVE_FAIL',
  };
}
