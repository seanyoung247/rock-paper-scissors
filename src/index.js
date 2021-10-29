import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import basicLogo from './images/logo.svg';
import spocklogo from './images/logo-bonus.svg';

import Header from './sections/header.js';
import Score from './components/score.js';
import GameUI from './components/gameui.js';
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
    this.setScore = this.setScore.bind(this);
  }
  
  componentDidMount(){
    document.title = this.game.getGameTitle();
  }

  setMode(mode) {
    if (this.game.modes.includes(mode)) {
      this.game.mode = mode;
      this.setState({mode: this.game.mode});
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
    return (
      <React.StrictMode>
        <Header title={<img src={logo[this.state.mode]} alt="Rock Paper Sissors" />}>
          <Score score={this.state.score}
            opponent={this.state.opponent} ties={this.state.ties} />
        </Header>
        <section className="gamePanel">
          <GameUI game={this.game} setScore={this.setScore} />
        </section>
        <footer>
          <RulesModal show={false} />
        </footer>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
