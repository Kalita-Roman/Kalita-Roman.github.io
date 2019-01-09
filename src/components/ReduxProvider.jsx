import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

const composeMiddlewares = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeMiddlewares(applyMiddleware(thunkMiddleware))

const store = createStore(reducers, middlewares);

export default function ReduxProvider({ children }) {
    return <Provider store={store}>
        {children}
    </Provider>;
}