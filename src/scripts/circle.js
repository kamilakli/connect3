import React from 'react';

export class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.changeColor=this.changeColor.bind(this);
    };
    changeColor() {
        if (this.props.color !== '' ) {
            return;
        }
        this.props.handleChange(this.props.number);
        
    }
    
    render () {
        console.log(this.props.color);
        return (
        <div style={{background: this.props.color}} 
        className='circle' 
        onClick={this.changeColor}
        />
        );
    }
}