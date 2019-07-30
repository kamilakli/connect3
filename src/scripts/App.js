import React from 'react';
import {Board} from './board';
import {Header} from './header';
import {Table} from './table';
import {Comments} from './comments';




export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: 'red' ,
        circleElements : ["","","","","","","","","","","","","",""]};
        this.changeUser = this.changeUser.bind(this);
      }

    changeUser(circleNumber) {
        const currentUser = this.state.name == 'red' ? 'yellow' : 'red';
        const newList =[...this.state.circleElements];
        newList[circleNumber]=this.state.name;
        this.setState({name: currentUser, circleElements: newList }, function (){console.log(this.state.circleElements)});
      }

    
    

    render () {
        return (
        <div>
         <div><Header /> </div>
            <div className ="columns"> <Board activeUser={this.state.name} handleChange={this.changeUser} circleElements={this.state.circleElements}/>
            <Table activeUser={this.state.name} handleChange={this.changeUser} />
            </div>
            <div><Comments /></div>
        </div>
    );
    }
}
