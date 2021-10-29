import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import logo from './images/logo.svg';
//import logoBonus from './images/logo-bonus.svg';

import Header from './sections/header.js';
import Score from './components/score.js';
import GameUI from './components/gameui.js';
import RulesModal from './components/rulesmodal.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.game = new Game("basic");
    this.state = {
      score: 0,
      opponent: 0,
      ties: 0
    };
    this.setScore = this.setScore.bind(this);
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
        <Header title={<img src={logo} alt="Rock Paper Sissors" />}>
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
