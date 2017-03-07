import { INGREDIENTS } from '../constants/actions';

import createActionCreators from './common';

const { addOrUpdateItem, fetchItemsIfNeeded, deleteItem } = createActionCreators('ingredient', INGREDIENTS);
export { addOrUpdateItem, fetchItemsIfNeeded, deleteItem };
