import React from 'react'
import {Circle} from './circle';

export class Board extends React.Component {
    render () {
        return (
        <div className = "leftColumn"> 
        <Circle activeUser={activeUser} handleChange={changeUser}/>  
        </div>
        );
    }
}
