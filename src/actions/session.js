import vkSessionPromise from '../utils/authvk';

export function fetchSession() {
  return async (dispatch) => {
    dispatch({
      type: 'FETCH_SESSION',
      payload: { pending: true }
    })
    vkSessionPromise({
      onAuth: () => { console.log('+') },
      apiId: 5675624
    })
    dispatch({
      type: 'FETCH_SESSION',
      payload: { pending: false, ...session }
    })
  }
}