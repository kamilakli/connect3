import React from 'react';
import {Board} from './board';
import {Header} from './header';
import {Table} from './table';
import {Comments} from './comments';



let activeUser = 'yellow';
export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: {activeUser} };
        this.changeUser = this.changeUser.bind(this);
      }

    changeUser() {
        const currentUser = this.state.name == 'yellow' ? 'red' : 'yellow';
        this.setState( {name: currentUser });
        console.log('pomocy');
      }
    

    render () {
        return (
        <div>
         <div><Header /> </div>
            <div className ="columns"> <Board activeUser={this.state.name} onClick={changeUser} />
            <Table activeUser={this.state.name} onClick={changeUser} />
            </div>
            <div><Comments /></div>
        </div>
    );
    }
}
