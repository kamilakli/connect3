import React from 'react';
import {Board} from './board';
import {Header} from './header';
import {Table} from './table';
import {Comments} from './comments';


// to jest miejsce gdzie będzie deklarować aktywnego uzytkownika
// potrzebna nam bedzie tez funkcja handleUserChange, 
// z naszą logiką do switchowania między red i yellow
export const App = () => {
    return (
        <div>
         <div><Header /> </div>
            <div className ="columns">
                {/* przekazujemy activeUser do board <Board activeUser={activeUser} handleChange={handleUserChange}> */}
                {/* zeby moc wymusic na rodzicu zmiane potrzebujemy jeszcze przekazywac funkcje */}
                {/* ktora bedzie uruchamiana tutaj */}
                {/* czyli: przekazujemy activeUser i handleChange do dziecka */}
                {/* i jak dziecko uruchomi handleChange */}
                {/* to rodzic zmienia uzytkownika i nowa wartosc przekazuje do dziecka  */}
                <Board/>
                {/* to samo dla table */}
                <Table/>
            </div>
            <div>
                <Comments />
            </div>
        </div>
    );
}
