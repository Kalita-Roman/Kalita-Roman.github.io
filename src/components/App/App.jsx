import React, { Component } from 'react';
import Message from '../Message';

import './App.scss';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Message />
            </div>
        );
    }
}
