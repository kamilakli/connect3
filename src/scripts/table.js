import React from 'react';
import {ActiveUser} from './activeUser';
import {Timer} from './timer';
import {CurrentScore} from './currentScore';


export class Table extends React.Component {
        constructor(props){
        super(props);
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
            <button onClick={this.startGame} className ="table">Start</button>
            {this.state.counter}
            <ActiveUser activeUser={this.props.activeUser} handleChange={this.props.handleChange} resetGame={this.props.resetGame}/>
            <Timer />
            <CurrentScore scoreRed={this.props.scoreRed} scoreYellow={this.props.scoreYellow}/>
        </div>
        );
    }
}
