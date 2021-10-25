import React, { Component } from 'react';

import logo from '../images/logo.svg';
import logoBonus from '../images/logo-bonus.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="title-bar">
          <div className="title">
            <img src={logo} alt="Rock Paper Sissors" />
          </div>
          <div className="score-wrapper">

          </div>
        </div>
      </header>
    );
  }
}

export default Header;
