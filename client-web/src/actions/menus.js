import { MENUS, COURSES, INGREDIENTS } from '../constants/actions';

import createActionCreators from './common';

const {
  addOrUpdateItem,
  fetchItemsIfNeeded,
  deleteItem,
} = createActionCreators('menu', MENUS, {
  fetchItems: {
    receiveItems: (org, items) =>
      dispatch => {
        dispatch(org(items.menus));
        dispatch({
          type: INGREDIENTS.RECEIVED_LIST,
          payload: items.ingredients,
        });
        return dispatch({
          type: COURSES.RECEIVED_LIST,
          payload: items.courses,
        });
      },
  },
});
export { addOrUpdateItem, fetchItemsIfNeeded, deleteItem };
