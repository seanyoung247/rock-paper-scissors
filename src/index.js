import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import logo from './images/logo.svg';
import logoBonus from './images/logo-bonus.svg';

import Header from './sections/header.js';
import Score from './components/score.js';
import GamePanel from './components/gamepanel.js';
import Modal from './components/modal.js';
//import RulesModal from './components/rulesmodal.js';

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Header title={<img src={logo} alt="Rock Paper Sissors" />}>
          <Score score={0} />
        </Header>
        <section>
          GAME HERE
        </section>
        <footer>
          <Modal show={false} />
        </footer>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
