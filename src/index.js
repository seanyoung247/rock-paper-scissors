import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import logo from './images/logo.svg';
import logoBonus from './images/logo-bonus.svg';

//import Header from './components/header.js';
import GamePanel from './components/gamepanel.js';
//import RulesModal from './components/rulesmodal.js';

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <header>
          <div className="title-bar">
            <div className="title">
              <img src={logo} alt="Rock Paper Sissors" />
            </div>
            <div className="score-wrapper">

            </div>
          </div>
        </header>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <header>
//       <Header title={<img src={logo} alt="Rock Paper Sissors" />}/>
//     </header>
//     <section>
//       <GamePanel />
//     </section>
//     <footer>
//       <RulesModal id="rules-modal" title="rules" show={false} />
//     </footer>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
