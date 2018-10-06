import Message from './Message.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    text: state.message,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Message);