import React from 'react'
import {Circle} from './circle';

// board dostanie activeUser i przekaze go dalej do kółek
export class Board extends React.Component {
    render () {
        return (
            <div className = "leftColumn"> 
                <Circle />  
            </div>
        );
    }
}
