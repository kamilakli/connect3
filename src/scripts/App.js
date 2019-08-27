import React from 'react';
import {Board} from './board';
import {Header} from './header';
import {Table} from './table';
import {Comments} from './comments';



let column = ["","",""];
let board = [[...column],[...column],[...column]];
let winner;

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
          name: 'red' ,
          columns: [[...column],[...column],[...column]],
          scoreRed:0,
          scoreYellow:0
        }; 
        this.changeUser = this.changeUser.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.addScore = this.addScore.bind(this);
        this.checkWinner = this.checkWinner.bind(this);
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
      {for (let i=0; i<3; i++)  
        {
        if (this.state.columns[i][0]&&this.state.columns[i][0]==this.state.columns[i][1]&&this.state.columns[i][1]==this.state.columns[i][2])
           {
          console.log ("The winner is", this.state.columns[i][0]);
          return winner = this.state.columns[i][0];
           }
        else if (this.state.columns[0][i]&&this.state.columns[0][i]==this.state.columns[1][i]&&this.state.columns[1][i]==this.state.columns[2][i])
          {
          console.log ("The winner is", this.state.columns[0][i]);
          return winner = this.state.columns[0][i];
          }
        else if (this.state.columns[0][0]&&this.state.columns[0][0]==this.state.columns[1][1]&&this.state.columns[1][1]==this.state.columns[2][2]||this.state.columns[0][2]==this.state.columns[1][1]&&this.state.columns[1][1]==this.state.columns[2][0])
          {
          console.log ("The winner is", this.state.columns[1][1]);
          return winner = this.state.columns[1][1];
          }
      }
      this.addScore();
    }

    addScore(){
      let scoreR=this.state.scoreRed;
      let scoreY=this.state.scoreYellow;
      if (winner == 'red') {
          return scoreR = scoreR++;
      }
      else if (winner == 'yellow') {
          return scoreY = scoreY++
      }
      this.setState({scoreRed:scoreR, scoreYellow:scoreY});
      
        console.log('Add score', scoreR)
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
                scoreRed={this.state.scoreRed}
                scoreYellow={this.state.scoreYellow}
                  />
            </div>
            <div className="comments">
              <Comments /></div>
        </div>
    );
    }
}
