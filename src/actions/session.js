import vkSessionPromise from '../utils/authvk';

export function fetchSession() {
  return async (dispatch) => {
    dispatch({
      type: 'FETCH_SESSION',
      payload: { pending: true }
    })
    const session = await vkSessionPromise({
      onAuth: (session) => { console.log('+', session) },
      apiId: 5675624
    })
    const { user: { id }, expire, secret, sig, sid } = session.session
    const res = await fetch('http://localhost:8080/permissions', {
      headers: {
        "Content-Type": "application/json",
        "vk-id": id,
        'vk-sid': sid,
        'vk-expire': expire,
        'vk-secret': secret,
        'vk-sig': sig,
      }
    })
    const permissions = await res.json();
    dispatch({
      type: 'FETCH_SESSION',
      payload: { pending: false, ...session, permissions }
    })
  }
}