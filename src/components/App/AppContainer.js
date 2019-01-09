import { connect } from 'react-redux';
import App from './App.jsx';
import { fetchInitialData } from '../../actions/app';

const mapDispatchToProps = {
  fetchInitialData
}

export default connect(null, mapDispatchToProps)(App);
