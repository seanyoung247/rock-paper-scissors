import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './header.css';

import basicLogo from './images/logo.svg';
import spocklogo from './images/logo-bonus.svg';

import Game from './logic/game.js';

import Menu from './components/menu.js';
import Score from './components/score.js';
import GameUI from './components/gameui.js';
import RulesModal from './components/rulesmodal.js';

const logo = {basic: basicLogo, spock: spocklogo};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.game = new Game();
    this.game.loadGame();

    this.state = {
      mode: this.game.mode,
      step: 0,
      score: this.game.getPlayer(1).score,
      opponent: this.game.getPlayer(2).score,
      ties: this.game.ties
    };
    this.settings = this.settings.bind(this);
    this.setScore = this.setScore.bind(this);
  }

  settings(setting, value) {
    switch (setting) {
      case "step":
        this.setState({step: value});
        break;
      case "mode":
        if (this.game.modes.includes(value)) {
          this.game.mode = value;
          this.game.resetGame();
          this.setState({
            step: 0,
            score: 0,
            opponent: 0,
            ties: 0,
            mode: this.game.mode
          });
        }
        break;
      case "reset":
        this.game.resetGame();
        this.setState({
          step: 0,
          score: 0,
          opponent: 0,
          ties: 0
        });
        break;
      default:
        break;
    }
    this.game.saveGame();
  }

  setScore(score, opponent=0, tie=0) {
    this.game.saveGame();
    this.setState({
      score: score,
      opponent: opponent,
      ties: tie
    });
  }

  render() {
    const score = {
      player: this.state.score,
      opponent: this.state.opponent,
      ties: this.state.ties
    }
    document.title = this.game.getGameTitle();
    return (
      <React.StrictMode>
        <header>
          <div className="col title">
            <img className="title-img"
              src={logo[this.state.mode]}
              alt={this.game.getGameTitle()} />
          </div>
          <div className="col menu">
            <Menu
              score={score}
              player={{
                one: this.game.getPlayer(1).name,
                two: this.game.getPlayer(2).name
              }}
              settings={{
                mode: this.game.mode,
                modes: this.game.modes,
                callback: this.settings
              }} />
          </div>
          <div className="col score">
            <Score
              score={score} />
          </div>
        </header>

        <section className="gamePanel">
          <GameUI
            game={this.game}
            step={this.state.step}
            settings={this.settings}
            setScore={this.setScore} />
        </section>

        <footer>
          <RulesModal show={false} rules={this.state.mode}/>
        </footer>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
