import React from 'react'
import {ActiveUser} from './activeUser';

//tu chciałam kombinować z kolorem i userem
// kółko dostanie aktywnego uzytkonika i moze go wykorzystac do koloru
// kluczowe jest, ze musimy przekazywac zmienne przez kilka poziomów
// ale trzymamy ją u najnizszgo wspólnego rodzica
let basic = '#39D1B4';
let extra = '#FFD712';

export class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: basic };
        this.changeColor = this.changeColor.bind(this);
      }

      changeColor() {
        const currentColor = this.state.color == basic ? extra : basic;
        this.setState({ color: currentColor });
      }

    
    render () {
        return <div style={{background: this.state.color}} className='circle' onClick={this.changeColor}>{this.props.x}</div>
    }
}