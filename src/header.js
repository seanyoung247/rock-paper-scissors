import React, { Component } from 'react';
import Score from './score.js';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <p>Rock</p>
          <p>Paper</p>
          <p>Scissors</p>
        </div>
        <Score />
      </header>
    );
  }
}

export default Header;
