import React from 'react';
import {Board} from './board';
import {Header} from './header';
import {Table} from './table';
import {Comments} from './comments';



let column = ["","",""];
let board = [[...column],[...column],[...column]];

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
          name: 'red' ,
          columns: [[...column],[...column],[...column]],
        }; 
        this.changeUser = this.changeUser.bind(this);
        this.resetGame = this.resetGame.bind(this);
      }

    changeUser(number) {
        const currentUser = this.state.name == 'red' ? 'yellow' : 'red';
        const newList =[...this.state.columns];
        newList[number.x][number.y]=this.state.name;
        this.setState(
          {name: currentUser, columns: newList }, 
          function (){
            this.checkWinner();
           
          }
          );
      }
      checkWinner() 
      { for (let i=0; i<3; i++)  
        {
        if (this.state.columns[i][0]&&this.state.columns[i][0]==this.state.columns[i][1]&&this.state.columns[i][1]==this.state.columns[i][2])
           {
          console.log ("The winner is", this.state.columns[i][0])
           }
        }
      }

      resetGame (){
        console.log(board);
        this.setState({columns:[[...column],[...column],[...column]]})
      }

    render () {
        return (
        <div>
         <div><Header /> </div>
            <div className ="columns"> 
              <Board 
                activeUser={this.state.name} 
                handleChange={this.changeUser} 
                columns={this.state.columns}
                  />
              <Table 
                activeUser={this.state.name} 
                handleChange={this.changeUser}
                resetGame={this.resetGame}
                  />
            </div>
            <div className="comments">
              <Comments /></div>
        </div>
    );
    }
}
