import { COURSES, INGREDIENTS } from '../constants/actions';

import createActionCreators from './common';

const {
  addOrUpdateItem,
  fetchItemsIfNeeded,
  deleteItem,
} = createActionCreators('course', COURSES, {
  fetchItems: {
    receiveItems: (org, items) => dispatch => {
      dispatch(org(items.courses));
      return dispatch({
        type: INGREDIENTS.RECEIVED_LIST,
        payload: items.ingredients,
      });
    },
  },
});
export { addOrUpdateItem, fetchItemsIfNeeded, deleteItem };
