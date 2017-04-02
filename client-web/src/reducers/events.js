const defaultState = {
  isFetching: false,
  items: [],
};

export default function ingReducer(
  state = defaultState,
  { type, payload, error }
) {
  switch (type) {
    default:
      return state;
  }
}
