import React from 'react';



export class CurrentScore extends React.Component {
    constructor(props){
        super(props);
    
}
    render () {
        return (
            <div className ="currentscore">
    <h2>Current score </h2>
    <div className ="score"><span id="scoreRed">Red: {this.props.scoreRed} </span> <span id="scoreYellow">Yellow: {this.props.scoreYellow}</span></div>
    </div>
    );
    }
}