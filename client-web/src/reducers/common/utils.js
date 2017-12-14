export function removeSubDocFromState(state, key, idToRemove) {
  return Object.keys(state).reduce((acc, itemId) => {
    acc[itemId] = {
      ...state[itemId],
      [key]: state[itemId][key].filter(subItemId => subItemId !== idToRemove),
    };
    return acc;
  }, {});
}
