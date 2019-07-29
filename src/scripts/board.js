import React from 'react'
import {Circle} from './circle';

export class Board extends React.Component {
    render () {
        return (
        <div className = "leftColumn"> 
        <Circle activeUser={this.props.activeUser} handleChange={this.props.changeUser}/>  
        </div>
        );
    }
}
