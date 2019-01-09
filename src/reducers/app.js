export default function (state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_INITIAL_DATA':
      return { ...state};
    default: return state;
  }
}