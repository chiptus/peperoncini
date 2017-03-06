import { SERVER_URL } from '../../config';

import createUpdateItemActionCreators from './update-item';
import createAddItemActionCreators from './add-item';

import createFetchItemsActionCreators from './fetch-items';

import createDeleteItemActionCreators from './delete-item';

export default function createActionCreators(itemsName, actions) {

  const { addItem } = createAddItemActionCreators(SERVER_URL, actions, itemsName);
  const { updateItem } = createUpdateItemActionCreators(SERVER_URL, actions, itemsName);
  const { fetchItemsIfNeeded } = createFetchItemsActionCreators(SERVER_URL, actions, itemsName);
  const { deleteItem } = createDeleteItemActionCreators(SERVER_URL, actions, itemsName);

  function addOrUpdateItem(item) {
    return item.id ? updateItem(item) : addItem(item);
  }

  /*
    function fetchItem(itemId) {
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
  */
  return {
    addOrUpdateItem,
    fetchItemsIfNeeded,
    deleteItem
  }
}

