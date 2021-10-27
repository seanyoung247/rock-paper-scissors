import React, { Component } from 'react';

import './gamepanel.css';

import GameUI from '../components/gameui.js';
import Button from '../components/button.js';

class GamePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: -1,
      player2: -1
    };
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
