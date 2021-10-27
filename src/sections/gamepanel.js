import React, { Component } from 'react';
import Game from '../logic/game.js';

import './gamepanel.css';

import Button from '../components/button.js';

class GamePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      player1: -1,
      player2: -1
    };
    this.game = new Game();
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    this.setState((state, props)=>({
      step: state.step+1
    }));
  }

  stepOne() {
    return (
      <div>
        {this.game.choices.map((data, index)=>(
          <Button key={index} title={data} onClick={this.nextStep} />
        ))}
      </div>
    );
  }
  stepTwo() {}
  stepThree() {}

  render() {
    return (
      <div id='gamePanel'>
        {this.state.step === 1 ? this.stepOne() : this.stepTwo()}
      </div>
    );
  }
}

export default GamePanel;
