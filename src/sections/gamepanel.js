import React, { Component } from 'react';

import './gamepanel.css';

import GameUI from '../components/gameui.js';

class GamePanel extends Component {
  render() {
    return (
      <div id='gamePanel'>
        <GameUI setScore={this.props.setScore} />
      </div>
    );
  }
}

export default GamePanel;
