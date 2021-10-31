import React, { Component } from 'react';

import gearLogo from '../images/icon-gear.svg';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { show: this.props.show };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((state, props)=>({
      show: !state.show
    }));
  }

  render() {
    // Toggle icon (gear?)
    // Settings modal:
      // Title
      // Game mode
      // Reset Game
      // Close Button
    return (
      <button>
        <img src={gearLogo} alt="Settings" />
        
      </button>
    );
  }
}

export default Settings
