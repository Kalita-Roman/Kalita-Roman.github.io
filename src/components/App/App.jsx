import React, { Component } from 'react';
import Message from '../Message';

import './App.scss';

export default class App extends Component {
    componentDidMount() {
        this.props.fetchSession();
    }

    componentDidUpdate() {

    }

    render() {
        const { ok, pending } = this.props;
        return (
            <div className="app">
                <div className="VKWidget" id="vk_auth" />
                {pending && <h1>{'Подождите...'}</h1>}
                {ok && <h1>{'Вам можно смотреть эту страницу!'}</h1>}
            </div>
        );
    }
}
