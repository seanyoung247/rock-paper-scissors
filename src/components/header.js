import React, { Component } from 'react';
import Score from './score.js';

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.title};
  }

  render() {
    return (
      <div className="title-bar">
        <div className="title">
          {this.state.title}
        </div>
        <div className="score-wrapper">
          <Score />
        </div>
      </div>
    );
  }
}

export default Header;
