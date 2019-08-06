import React from 'react';

export class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state={color:'transparent'};
        this.user="kamila"
        this.changeColor=this.changeColor.bind(this);
    };
    changeColor() {
        if (this.state.color !== 'transparent' ) {
            return;
        }
        this.setState({color:this.props.activeUser})
        this.props.handleChange(this.props.number);
        
    }
    
    render () {
        return (
        <div style={{background: this.state.color}} 
        className='circle' 
        onClick={this.changeColor}
        >
        
        {this.props.x}

        </div>
        );
    }
}