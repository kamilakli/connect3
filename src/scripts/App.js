import React from 'react';
import {Board} from './board';
import {Header} from './header';
import {Table} from './table';
import {Comments} from './comments';


let activeUser = 'red';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { activeUser: 'red' };
        this.changeUser = this.changeUser.bind(this);
      }

    changeUser() {
        const currentUser = this.state.activeUser == 'yellow' ? 'red' : 'yellow';
        this.setState({ activeUser: currentUser });
        console.log('pomocy');
      }

    render () {
        return (
        <div>
         <div><Header /> </div>
            <div className ="columns"> <Board activeUser={activeUser} handleChange={changeUser} />
            <Table activeUser={activeUser} handleChange={changeUser} />
            </div>
            <div><Comments /></div>
        </div>
    );
    }
}
