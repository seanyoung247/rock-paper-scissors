import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Header from './components/header.js';
import GamePanel from './components/gamepanel.js';
import Modal from './components/modal.js';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <Header />
    </header>
    <section>
      <GamePanel />
    </section>
    <footer>
      <Modal id="rules-modal" title="rules" show={false} />
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);
