import React, { Component } from 'react';
import Game from '../logic/game.js';

import Chooser from './chooser.js';
import Display from './display.js';

class GameUI extends Component {
  constructor(props) {
    super(props);
    this.state = {step: 0};
    this.game = new Game();
    this.setChoice = this.setChoice.bind(this);
    this.steps = [
      {
        setup: ()=>this.game.newRound(),
        render: ()=>{
          <Chooser choices={this.game.choices}
                    player={1} choose={this.setChoice} />
        }
      },
      {
        setup: ()=>setTimeout(()=>this.setStep(2), 1000),
        render: ()=><Display game={this.game} />
      },
      {
        setup: ()=>{
          const choice = this.game.randomChoice();
          this.game.setPlayerChoice(2, choice);
          setTimeout(()=>this.setStep(3), 1000);
        },
        render: ()=><Display game={this.game} />
      },
      {
        setup: ()=>{
          this.game.scoreGame();
          this.props.setScore(this.game.getPlayer(1).score);
        },
        render: ()=><Display game={this.game} reset={()=>this.setStep(0)} />
      }
    ];
  }

  setStep(step) {
    this.steps[step].setup();
    this.setState({step: step});
  }

  setChoice(player, choice) {
    this.game.setPlayerChoice(player, choice);
    this.setStep(this.state.step + 1);
  }

  render() {
    return this.steps[this.state.step].render();
  }
}

export default GameUI;
