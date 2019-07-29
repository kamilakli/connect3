import React from 'react';
import {DisplayUserButton} from './displayUserButton';

//Tu mój aktywny user kod, chciałam przenieść button do oddzielnego komponentu, ale coś poszło nie tak, dlatego import na górze
export class ActiveUser extends React.Component {
    render () {
        
        return (
        <div className = "activeuser">
            <p>Active user is {activeUser}</p>
            <DisplayUserButton text="Change user" onClick={changeUser} />
        </div>
        );
    }
}
