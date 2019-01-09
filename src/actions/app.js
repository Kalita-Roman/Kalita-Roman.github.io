export function fetchInitialData() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_INITIAL_DATA',
      payload: { pending: true }
    })
    dispatch({
      type: 'FETCH_INITIAL_DATA',
      payload: { pending: false }
    })
  }
}