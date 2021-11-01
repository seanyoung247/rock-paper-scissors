import React, { Component, Fragment } from 'react';

import './menu.css';

import menuIcon from '../images/icon-menu.svg';
import closeIcon from '../images/icon-close.svg';

class Menu extends Component {
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
        <button className="menu-icon" onClick={this.toggleShow} >
          <img src={menuIcon} alt="Settings" />
        </button>
        <div className={this.state.show ? "menu-dialog show" : "menu-dialog"}>
          <div className="menu-wrapper">
            <h2>Current Game</h2>
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
            <button className="menu-close" onClick={this.toggleShow}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

Menu.defaultProps = {
  show: false
}

export default Menu
