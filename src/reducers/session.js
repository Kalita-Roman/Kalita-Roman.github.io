export default function (state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_SESSION':
      return { ...state, ...payload};
    default: return state;
  }
}