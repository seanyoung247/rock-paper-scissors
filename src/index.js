import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Header from './components/header.js';
import GamePanel from './components/gamepanel.js';
import Button from './components/button.js';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <Header />
    </header>
    <section>
      <GamePanel />
    </section>
    <footer>
      <Button title="Rules" className="test" clickHandler={()=>console.log('Rules!')} />
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);
