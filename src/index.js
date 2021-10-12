import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Header from './components/header.js';
import GamePanel from './components/gamepanel.js';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <Header />
    </header>
    <section>
      <GamePanel />
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);
