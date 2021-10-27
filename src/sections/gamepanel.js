import React, { Component } from 'react';

import './gamepanel.css';

import GameUI from '../components/gameui.js';
import Button from '../components/button.js';

class GamePanel extends Component {
  render() {
    return (
      <div id='gamePanel'>
        <GameUI />
      </div>
    );
  }
}

export default GamePanel;
