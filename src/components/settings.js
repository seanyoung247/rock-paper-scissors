import React, { Component, Fragment } from 'react';

import './settings.css';

import gearLogo from '../images/icon-gear.svg';
import closeIcon from '../images/icon-close.svg';

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
    return (
      <Fragment>
        <button className="settings-icon" onClick={this.toggleShow} >
          <img src={gearLogo} alt="Settings" />
        </button>
        <div className={this.state.show ? "settings-dialog show" : "settings-dialog"}>
          <div className="settings-wrapper">
            <h2>Settings</h2>
            <select name="gameModes" value={this.props.mode}
              onChange={(e)=>this.props.settings("mode", e.target.value)}>

              {this.props.modes.map((data, index)=>(
                <option key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>
            <button onClick={()=>this.props.settings("reset", true)}>
              Reset Game
            </button>
            <button className="settings-close" onClick={this.toggleShow}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

Settings.defaultProps = {
  show: false
}

export default Settings
