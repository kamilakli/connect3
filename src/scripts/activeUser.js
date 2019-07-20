import React from 'react';
import {DisplayUserButton} from './displayUserButton';

export class ActiveUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: 'yellow' };
        this.changeUser = this.changeUser.bind(this);
      }

    changeUser() {
        const currentUser = this.state.user == 'yellow' ? 'red' : 'yellow';
        this.setState({ user: currentUser });
      }
    
    render () {
        
        return (
        <div className = "activeuser">
            <p>Active user is {this.state.user}</p>
            <button onClick={this.changeUser}>Change user </button>
        </div>
        );
    }
}
