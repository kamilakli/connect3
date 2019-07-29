import React from 'react';


//tu chciałam kombinować z kolorem i userem

//let basic = '#39D1B4';
//let extra = '#FFD712';

export class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: this.props.activeUser }
      }
    
    render () {
        return (
        <div style={{backgroundColor: this.state.color}} className='circle' onClick={this.props.changeUser}>{this.props.x}

        </div>
        );
    }
}