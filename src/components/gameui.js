import React, { Component } from 'react';
import Game from '../logic/game.js';

import Button from './button.js';

import Chooser from './chooser.js';
import Display from './display.js';

class GameUI extends Component {
  constructor(props) {
    super(props);
    this.state = {step: 0};
    this.game = new Game();
    this.setStep = this.setStep.bind(this);
    this.setChoice = this.setChoice.bind(this);
    this.steps = [
      {
        setup: ()=>this.game.resetGame, // new round
        render: ()=>
          <Chooser choices={this.game.choices} player={1} choose={this.setChoice} />
      },
      {
        setup: null, // step timer
        render: ()=>
          <Display
            player1={this.game.getPlayer(1).choice}
            player2={this.game.getPlayer(2).choice} />
      },
      {
        setup: null, // computer choice, step timer
        render: ()=>this.stepThree()
      },
      {
        setup: null, // check winner
        render: ()=>this.stepFour()
      }
    ];
  }

  setStep(step) {
    this.setState({step: step});
    // Do actions for next step here
  }

  setChoice(player, choice) {
    this.game.setPlayerChoice(player, choice);
    this.setStep(this.state.step + 1);
  }

  getChoice() {}

  setTimer() {}

  // Display computer choice
  stepThree() {
    return (
      <div>
        <p>step three</p>
        <Button onClick={()=>this.setStep(3)}>
          Next step
        </Button>
      </div>
    );
  }
  // Display winner
  stepFour() {
    return (
      <div>
        <p>step four</p>
        <Button onClick={()=>this.setStep(0)}>
          Restart
        </Button>
      </div>
    );
  }

  render() {
    return this.steps[this.state.step].render();
  }
}

export default GameUI;
