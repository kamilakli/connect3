import React from 'react';

export class CommentButton extends React.Component {
    render () {
        return <button onClick="readInput()" className="specialButton">{this.props.text}</button>
    }
}