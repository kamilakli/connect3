import React from 'react'
import {Circle} from './circle';

const activeUser ='yellow';
export class Board extends React.Component {
    render () {
        return (
        <div>Board 
        <Circle x={activeUser} />  
        </div>)
        ;
    }
}
