import { combineReducers } from 'redux';

import app from './app';

export default combineReducers({
    app,
    message: () => 'В разработке...',
});