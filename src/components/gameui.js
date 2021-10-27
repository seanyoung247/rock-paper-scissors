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
        setup: ()=>this.game.resetGame(),
        render: ()=>
          <Chooser choices={this.game.choices} player={1} choose={this.setChoice} />
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
        setup: ()=>console.log("Step Four"), // check winner
        render: ()=>this.stepFour()
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
    console.log(this.game.getPlayer(2).choice);
    return this.steps[this.state.step].render();
  }
}

export default GameUI;
