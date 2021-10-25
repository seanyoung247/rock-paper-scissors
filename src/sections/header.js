import React, { Component } from 'react';

import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="title-bar">
          <div className="title">
            {this.props.title}
          </div>
          <div className="score-wrapper">
            {this.props.children}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
