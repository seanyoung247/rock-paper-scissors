import React, { Component } from 'react';

import './gamepanel.css';

const choices = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
  LIZARD: 4,
  SPOCK: 5,
}


class GamePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
  }
  render() {
    return (
      <div id='gamePanel'>
        <p>Game goes here</p>
      </div>
    );
  }
}

export default GamePanel;
