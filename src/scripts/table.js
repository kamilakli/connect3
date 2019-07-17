import React from 'react';

export class Table extends React.Component {
    constructor(){
        super();
        this.state={counter:0}
        this.startGame=this.startGame.bind(this)
    }
    startGame(){
        console.log('Gra rozpoczęta', new Date);
        this.setState({counter:1})
    }
    render () {
        return (
        <div className = "rightColumn">
            <button className='table' onClick={this.startGame}></button>
            {this.state.counter}
        </div>
        );
    }
}
