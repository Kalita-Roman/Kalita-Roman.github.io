export function fetchSession() {
  return async (dispatch) => {
    dispatch({
      type: 'FETCH_SESSION',
      payload: { pending: true }
    })
    const response = await fetch('http://localhost/session', {
      credentials: 'include',
    });
    const session = await response.json();
    dispatch({
      type: 'FETCH_SESSION',
      payload: { pending: false, ...session }
    })
  }
}