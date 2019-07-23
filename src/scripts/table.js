import React from 'react';
import {ActiveUser} from './activeUser';
import {Timer} from './timer';
import {CurrentScore} from './currentScore';


export class Table extends React.Component {
        constructor(){
        // pamietaj ze jeśli korzystasz z props to musisz je dodać w constructorze 
        // constructor(props){
        // super(props)
        // ....
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
            <button onClick={this.startGame} className ="table">Start</button>
            {this.state.counter}
            {/* table dostanie w props activeUser i przekaze do ActiveUser komponent */}
            <ActiveUser />
            <Timer />
            <CurrentScore />
        </div>
        );
    }
}
