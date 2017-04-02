import { MENUS, COURSES } from '../constants/actions';

import createActionCreators from './common';

const { addOrUpdateItem, fetchItemsIfNeeded, deleteItem } = createActionCreators('menu', MENUS, {
  fetchItems: {
    receiveItems: (org, items) => dispatch => {
      dispatch(org(items.menus));
      return dispatch(({
        type: COURSES.RECEIVED_LIST,
        payload: items.courses,
      }))
    }
  }
});
export { addOrUpdateItem, fetchItemsIfNeeded, deleteItem };