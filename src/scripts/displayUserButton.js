import React from 'react';

export class DisplayUserButton extends React.Component {
    render () {
        return <button onClick={this.props.onClick}>{this.props.text}</button>
    }
}