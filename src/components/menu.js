import React, { Component, Fragment } from 'react';

import './menu.css';
import closeIcon from '../images/icon-close.svg';

import MenuIcon from './menuIcon.js';

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
        <MenuIcon show={this.state.show} toggle={this.toggleShow} />

        <div className={this.state.show ? "menu-dialog show" : "menu-dialog"}>
          <div className="menu-wrapper">
            <h2>Current Game</h2>
            <div>
              {this.props.player.one} -vs- {this.props.player.two}
            </div>
            <ul className="score-list">
              <li>Wins: {this.props.score.player}</li>
              <li>Loses: {this.props.score.opponent}</li>
              <li>Ties: {this.props.score.ties}</li>
            </ul>

            <button className="menu-button"
              onClick={()=>this.props.settings.callback("reset", true)}>
              Restart Game
            </button>

            <h2>Settings</h2>
            <label htmlFor="modesSelect">Game Type: </label>
            <select id="modesSelect" className="game-mode"
              name="gameModes" value={this.props.settings.mode}
              onChange={(e)=>this.props.settings.callback("mode", e.target.value)}>

              {this.props.settings.modes.map((data, index)=>(
                <option key={index} value={data}>
                  {this.props.settings.names[data]}
                </option>
              ))}
            </select>

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
