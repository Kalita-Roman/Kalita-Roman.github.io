import { connect } from 'react-redux';
import App from './App.jsx';
import { fetchSession } from '../../actions/session';

const mapStateToProps = (state) => {
  console.log('state', state.session)
  if(state.session.pending) {
    return { pending: true }
  }
  if (state.session.permissions && state.session.permissions.ok === 'ok') {
    console.log('!');
    return { ok: true }
  }
  return { ok: false }
}

const mapDispatchToProps = {
  fetchSession
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
