import React, { Component } from 'react';

import './gamepanel.css';

import Game from '../logic/game.js';

class GamePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };

  }

  stepOne() {}
  stepTwo() {}
  stepThree() {}

  render() {
    const game = new Game();
    return (
      <div id='gamePanel'>
        {game.choices.map((data, index)=>(<p key={index}>{data}</p>))}
      </div>
    );
  }
}

export default GamePanel;
