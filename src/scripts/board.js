import React from 'react'
import {Circle} from './circle';

export class Board extends React.Component {
    render () {
        return (
        <div className = "leftColumn"> 
        {this.props.circleElements.map((element, index)=>
            <Circle 
            activeUser={this.props.activeUser} 
            handleChange={this.props.handleChange}
            number={index}
            /> )
        } 
        </div>
        );
    }
}
