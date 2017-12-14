import { SERVER_URL } from '../../config';

import createUpdateItemActionCreators from './update-item';
import createAddItemActionCreators from './add-item';

import createFetchItemsActionCreators from './fetch-items';

import createDeleteItemActionCreators from './delete-item';

export default function createActionCreators(itemsName, actions, options = {}) {
  const { addItem } = createAddItemActionCreators(
    SERVER_URL,
    actions,
    itemsName
  );
  const { updateItem } = createUpdateItemActionCreators(
    SERVER_URL,
    actions,
    itemsName
  );
  const { fetchItemsIfNeeded } = createFetchItemsActionCreators(
    SERVER_URL,
    actions,
    itemsName,
    options.fetchItems
  );
  const { deleteItem } = createDeleteItemActionCreators(
    SERVER_URL,
    actions,
    itemsName
  );

  function addOrUpdateItem(item) {
    return item._id ? updateItem(item) : addItem(item);
  }

  return {
    addOrUpdateItem,
    fetchItemsIfNeeded,
    deleteItem,
  };
}
