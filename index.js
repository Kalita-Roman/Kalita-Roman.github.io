import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from './src/components/ReduxProvider.jsx';
import Root from './src/components/Root.jsx';

import './style/style.scss';

ReactDOM.render(
    <ReduxProvider>
        <Root/>
    </ReduxProvider>,
    document.getElementById('root'),
);
