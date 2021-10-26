import React, { Component } from 'react';

import './gamepanel.css';

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
