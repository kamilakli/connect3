import React from 'react'
import {Circle} from './circle';

export class Board extends React.Component {
    render () {
        return (
            <div className = "leftColumn">
            {this.props.columns.map((single,position) =>
            <div className ="row">     
            {single.map((element, index)=>
                <Circle 
                activeUser={this.props.activeUser} 
                handleChange={this.props.handleChange}
                number={{x:position,y:index}}
                color={this.props.columns[position][index]}
                /> )
            } 
            </div>
            )
        }
            </div>
            );
        }
    }
