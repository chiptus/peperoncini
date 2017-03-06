import { INGREDIENTS } from '../constants/actions';

import createItemIdReducer from './common/create-item-id-reducer';

export default createItemIdReducer(INGREDIENTS);

// const defaultState = {
//   isFetching: false,
//   items: [],
// };

// export default function ingReducer(state = defaultState, {type, payload, error}) {
//   if (!type){
//     return state;
//   }
//   return {
//     ...state,
//     isFetching: isFetchingReducer(state.isFetching, {type, payload}),
//     items: itemsReducer(state.items, {type, payload}),
//   }
// }



// function isFetchingReducer(isFetching = false, {type, payload}) {
//   switch (type) {
//     case INGREDIENTS.FETCH_LIST:
//     case INGREDIENTS.FETCH_ITEM:
//     case INGREDIENTS.REQUEST_ADD:
//     case INGREDIENTS.REQUEST_SAVE:
//     case INGREDIENTS.REQUEST_UPDATE:
//     case INGREDIENTS.REQUEST_DELETE:
//       return true;

    
//     case INGREDIENTS.RECEIVED_ITEM:
//     case INGREDIENTS.ADD:
//     case INGREDIENTS.DELETE:
//     case INGREDIENTS.UPDATE:
//     case INGREDIENTS.FETCH_LIST_FAIL:
//     case INGREDIENTS.RECEIVED_LIST:
//     case INGREDIENTS.REQUEST_ADD_FAIL:
//     case INGREDIENTS.REQUEST_SAVE_FAIL:
//     case INGREDIENTS.REQUEST_UPDATE_FAIL:
//     case INGREDIENTS.REQUEST_DELETE_FAIL:
//     case INGREDIENTS.FETCH_ITEM_FAIL:
//       return false;
//     default:
//       return isFetching;
//   }
// }



// function itemsReducer(items = [], {type, payload, error}) {
//   switch (type) {
//     case INGREDIENTS.ADD:
//       return addItem(items, payload.id);
//     case INGREDIENTS.DELETE:
//       return deleteItem(items, payload);
//     case INGREDIENTS.RECEIVED_LIST:
//       return payload.map(({id}) => id);
//     case INGREDIENTS.RECEIVED_ITEM:
//       return [payload.id];
    
//      case INGREDIENTS.FETCH_ITEM:
//     case INGREDIENTS.REQUEST_DELETE:
//      case INGREDIENTS.REQUEST_DELETE_FAIL:
//     case INGREDIENTS.FETCH_ITEM_FAIL:
//     case INGREDIENTS.UPDATE:
//     case INGREDIENTS.REQUEST_ADD_FAIL:
//     case INGREDIENTS.FETCH_LIST:
//     case INGREDIENTS.REQUEST_ADD:
//     case INGREDIENTS.REQUEST_SAVE:
//     case INGREDIENTS.REQUEST_UPDATE:
//     case INGREDIENTS.FETCH_LIST_FAIL:
//     case INGREDIENTS.REQUEST_SAVE_FAIL:
//     case INGREDIENTS.REQUEST_UPDATE_FAIL:
//     default:
//       return items;
//   }
// }

// function addItem(items, id) {
//   return [
//     id,
//     ...items,
//   ];
// }

// function deleteItem(items, id) {
//   return items.filter(itemId => itemId !== id)
// }