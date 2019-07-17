import React from 'react';
import {Board} from './board';
import {Header} from './header';
import {Table} from './table';


export const App = (props) => {
    return (
        <div><Header />
        <Board /> <Table /> {props.user.name}</div>
    );
}
