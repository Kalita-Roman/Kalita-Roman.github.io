import vkSessionPromise from '../utils/authvk';

export function fetchInitialData() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_INITIAL_DATA',
      payload: { pending: true }
    })

    vkSessionPromise({
      onAuth: () => {console.log('+')}, 
      apiId: 5675624
    })


    dispatch({
      type: 'FETCH_INITIAL_DATA',
      payload: { pending: false }
    })
  }
}