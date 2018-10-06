import React, { Component } from 'react';

export default class Message extends Component {
    render() {
        const {text} = this.props;
        return (
            <div className="message">
                {text}
            </div>
        );
    }
}
