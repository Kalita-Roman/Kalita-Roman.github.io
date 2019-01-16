import { connect } from 'react-redux';
import App from './App.jsx';
import { fetchSession } from '../../actions/session';

const mapDispatchToProps = {
  fetchSession
}

export default connect(null, mapDispatchToProps)(App);
