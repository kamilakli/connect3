import React from 'react';
import {DisplayUserButton} from './displayUserButton';

//Tu mój aktywny user kod, chciałam przenieść button do oddzielnego komponentu, ale coś poszło nie tak, dlatego import na górze
export class ActiveUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: 'yellow' };
        this.changeUser = this.changeUser.bind(this);
      }

    changeUser() {
        // pięknę ternary! 
        const currentUser = this.state.user === 'yellow' ? 'red' : 'yellow';
        this.setState({ user: currentUser });
      }
    
    render () {
        
        return (
        <div className = "activeuser">
            <p>Active user is {this.state.user}</p>
            <DisplayUserButton text="Change user" onClick={this.changeUser} />
            {/* <button onClick={this.changeUser}>Change user </button> */}
        </div>
        );
    }
}
