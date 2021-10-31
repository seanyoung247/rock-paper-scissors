import React, { Component, Fragment } from 'react';

import './settings.css';

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
      <Fragment>
        <button className="settings-icon" onClick={this.toggleShow} >
          <img src={gearLogo} alt="Settings" />
        </button>
        {
          this.state.show && (
            <div className="settings-dialog">
              Settings
            </div>
          )
        }
      </Fragment>
    );
  }
}

Settings.defaultProps = {
  show: false
}

export default Settings
