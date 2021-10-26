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
    this.state = {score: 0};
    this.incScore = this.incScore.bind(this);
  }

  incScore(inc = 1) {
    this.setState((state, props)=>({
      score: state.score + inc
    }));
  }

  render() {
    return (
      <React.StrictMode>
        <Header title={<img src={logo} alt="Rock Paper Sissors" />}>
          <Score score={this.state.score} />
        </Header>
        <section>
          <GamePanel incScore={this.incScore} />
        </section>
        <footer>
          <RulesModal show={false} />
        </footer>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
