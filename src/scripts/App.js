import React from 'react';
import {Board} from './board';
import {Header} from './header';
import {Table} from './table';
import {Comments} from './comments';



export const App = () => {
    return (
        <div>
         <div><Header /> </div>
            <div className ="columns"> <Board/><Table/>
            </div>
            <div><Comments /></div>
        </div>
    );
}
