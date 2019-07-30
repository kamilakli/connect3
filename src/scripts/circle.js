import React from 'react';

export class Circle extends React.Component {
    constructor(props) {
        super(props);
    };
    
    render () {
        return (
        <div style={{background: this.props.activeUser}} className='circle' onClick={this.props.handleChange}>{this.props.x}

        </div>
        );
    }
}