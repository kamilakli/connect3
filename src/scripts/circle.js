import React from 'react'

//tu chciałam kombinować z kolorem i userem

//let basic = '#39D1B4';
//let extra = '#FFD712';

export class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: {activeUser} };
        this.changeColor = this.changeColor.bind(this);
      }

      changeColor() {
        const currentColor = {activeUser}
        this.setState({ color: currentColor });
      }

    
    render () {
        return (
        <div style={{background: this.state.color}} className='circle' onClick={this.changeColor} onClick={this.props.changeUser}>{this.props.x}

        </div>
        );
    }
}