import React, { Component } from 'react';
import Message from '../Message';

import './App.scss';

export default class App extends Component {
    componentDidMount() {
        this.props.fetchInitialData();
    }

    componentDidUpdate() {
        
    }

    render() {
        return (
            <div className="app">
                <div className="VKWidget" id="vk_auth" />
                <Message />
            </div>
        );
    }
}
