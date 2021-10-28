import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import logo from './images/logo.svg';
//import logoBonus from './images/logo-bonus.svg';

import Header from './sections/header.js';
import Score from './components/score.js';
import GamePanel from './sections/gamepanel.js';
import RulesModal from './components/rulesmodal.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      opponent: 0,
      tie: 0
    };
    this.setScore = this.setScore.bind(this);
  }

  setScore(score, opponent=0, tie=0) {
    this.setState({
      score: score,
      opponent: opponent,
      tie: tie
    });
  }

  render() {
    return (
      <React.StrictMode>
        <Header title={<img src={logo} alt="Rock Paper Sissors" />}>
          <Score score={this.state.score} />
        </Header>
        <section>
          <GamePanel setScore={this.setScore} />
        </section>
        <footer>
          <RulesModal show={false} />
        </footer>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
