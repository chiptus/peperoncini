import { INGREDIENTS } from '../../constants/actions';
import createEntityReducer from '../common/create-entity-reducer';

export default createEntityReducer(INGREDIENTS);


// /*
    
  
// */

// export default function ingEntitiesReducer(state = {}, {type, payload, error}) {
//   switch (type) {
//     case INGREDIENTS.UPDATE:
//     case INGREDIENTS.RECEIVED_ITEM:
//     case INGREDIENTS.ADD:
//       return {
//         ...state,
//         [payload.id]: {
//           ...state[payload.id],
//           ...payload,
//         },
//       };
//     case INGREDIENTS.DELETE:
//       return {
//         ...state,
//         [payload.id]: undefined,
//       };
//     case INGREDIENTS.RECEIVED_LIST:
//       return {
//         ...payload.reduce((items, current) => {
//           return {
//             ...items,
//             [current.id]: current,
//           }
//         }, {})
//       }

//     case INGREDIENTS.FETCH_ITEM:
//     case INGREDIENTS.REQUEST_DELETE:
//     case INGREDIENTS.REQUEST_DELETE_FAIL:
//     case INGREDIENTS.FETCH_ITEM_FAIL:
//     case INGREDIENTS.FETCH_LIST:
//     case INGREDIENTS.REQUEST_ADD:
//     case INGREDIENTS.REQUEST_SAVE:
//     case INGREDIENTS.REQUEST_UPDATE:
//     case INGREDIENTS.FETCH_LIST_FAIL:
//     case INGREDIENTS.REQUEST_ADD_FAIL:
//     case INGREDIENTS.REQUEST_SAVE_FAIL:
//     case INGREDIENTS.REQUEST_UPDATE_FAIL:
//     default:
//       return state;
//   }
// }