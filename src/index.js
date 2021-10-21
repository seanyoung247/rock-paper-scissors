import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Header from './components/header.js';
import GamePanel from './components/gamepanel.js';
import RulesModal from './components/rulesmodal.js';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <Header />
    </header>
    <section>
      <GamePanel />
    </section>
    <footer>
      <RulesModal id="rules-modal" title="rules" show={false} />
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);
