import React, { Component } from 'react';
import Score from './score.js';

class Header extends Component {
  render() {
    return (
      <div className="title-bar">
        <div className="title">
          <p>Rock</p>
          <p>Paper</p>
          <p>Scissors</p>
        </div>
        <div className="score-wrapper">
          <Score />
        </div>
      </div>
    );
  }
}

export default Header;
