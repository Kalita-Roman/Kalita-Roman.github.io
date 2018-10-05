import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './style/style.scss';

render();

if (module.hot) {
    module.hot.accept('./src/components/App/App.js', () => {
        render();
    });
}

function render() {
    const App = require('./src/components/App/App.js').default;
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('root'),
    );
}
