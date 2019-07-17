import React from 'react'


export class Circle extends React.Component {
    welcome() {
        console.log('Jestem kółkiem')
    }
    render () {
        return <div className='circle' onClick={this.welcome}>{this.props.x}</div>
    }
}