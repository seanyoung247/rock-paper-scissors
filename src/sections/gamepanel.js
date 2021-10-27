import React, { Component } from 'react';
import Game from '../logic/game.js';

import './gamepanel.css';

import GameUI from '../components/gameui.js';
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

  render() {
    return (
      <div id='gamePanel'>
        <GameUI step={this.state.step} />
      </div>
    );
  }
}

export default GamePanel;
