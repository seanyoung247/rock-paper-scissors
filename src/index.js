import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.js';
import Badge from './badge.js';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Badge />
  </React.StrictMode>,
  document.getElementById('root')
);
