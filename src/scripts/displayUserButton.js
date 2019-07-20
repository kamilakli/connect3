import React from 'react';

export class DisplayUserButton extends React.Component {
    render () {
        return <button onClick={this.changeUser}>{this.props.text}</button>
    }
}