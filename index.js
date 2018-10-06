import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ReduxProvider from './src/components/ReduxProvider.jsx';
import './style/style.scss';

render();

if (module.hot) {
    module.hot.accept('./src/components/App', () => {
        render();
    });
}

function render() {
    const App = require('./src/components/App').default;
    ReactDOM.render(
        <ReduxProvider>
            <AppContainer>
                <App />
            </AppContainer>
        </ReduxProvider>,
        document.getElementById('root'),
    );
}
