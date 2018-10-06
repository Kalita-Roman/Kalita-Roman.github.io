import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(reducers, (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(thunkMiddleware)));

export default function ReduxProvider({ children }) {
    return <Provider store={store}>
        {children}
    </Provider>;
}