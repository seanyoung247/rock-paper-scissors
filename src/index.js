import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';
import GamePanel from './components/gamepanel.js';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <GamePanel />
  </React.StrictMode>,
  document.getElementById('root')
);
