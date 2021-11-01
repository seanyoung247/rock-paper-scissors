import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './header.css';

import basicLogo from './images/logo.svg';
import spocklogo from './images/logo-bonus.svg';

import Game from './logic/game.js';

import Score from './components/score.js';
import GameUI from './components/gameui.js';
import Settings from './components/settings.js';
import RulesModal from './components/rulesmodal.js';

const logo = {basic: basicLogo, spock: spocklogo};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.game = new Game("basic");
    this.state = {
      mode: "basic",
      score: 0,
      opponent: 0,
      ties: 0
    };
    this.changeSettings = this.changeSettings.bind(this);
    this.setScore = this.setScore.bind(this);
  }

  changeSettings(setting, value) {
    switch (setting) {
      case "mode":
        if (this.game.modes.includes(value)) {
          this.game.mode = value;
          this.setState({mode: this.game.mode});
        }
        break;
      case "reset":
        this.game.resetGame();
        break;
      default:
        break;
    }
  }

  setScore(score, opponent=0, tie=0) {
    this.setState({
      score: score,
      opponent: opponent,
      ties: tie
    });
  }

  render() {
    document.title = this.game.getGameTitle();
    return (
      <React.StrictMode>
        <header>
          <img className="title-img"
            src={logo[this.state.mode]}
            alt={this.game.getGameTitle()} />

          <Settings
            mode={this.game.mode}
            modes={this.game.modes}
            settings={this.changeSettings} />

          <Score
            score={this.state.score}
            opponent={this.state.opponent}
            ties={this.state.ties} />
        </header>

        <section className="gamePanel">
          <GameUI game={this.game} setScore={this.setScore} />
        </section>

        <footer>
          <RulesModal show={false} rules={this.state.mode}/>
        </footer>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
