import React from 'react';
import {Board} from './board';
import {Header} from './header';
import {Table} from './table';
import {Comments} from './comments';




export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: 'red' };
        this.changeUser = this.changeUser.bind(this);
      }

    changeUser() {
        const currentUser = this.state.name == 'red' ? 'yellow' : 'red';
        this.setState({name: currentUser });
        console.log(this.state.name);
      }
    

    render () {
        return (
        <div>
         <div><Header /> </div>
            <div className ="columns"> <Board activeUser={this.state.name} handleChange={this.changeUser} />
            <Table activeUser={this.state.name} handleChange={this.changeUser} />
            </div>
            <div><Comments /></div>
        </div>
    );
    }
}
