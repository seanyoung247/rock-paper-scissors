import React, { Component } from 'react';

import Chooser from './chooser.js';
import Display from './display.js';

class GameUI extends Component {
  constructor(props) {
    super(props);
    this.state = {step: 0};
    this.setChoice = this.setChoice.bind(this);
    this.steps = [
      {
        setup: ()=>this.props.game.newRound(),
        render: ()=>(
          <Chooser choices={this.props.game.choices}
                    player={1} choose={this.setChoice} />
        )
      },
      {
        setup: ()=>setTimeout(()=>this.setStep(2), 1000),
        render: ()=><Display game={this.props.game} />
      },
      {
        setup: ()=>{
          const choice = this.props.game.randomChoice();
          this.props.game.setPlayerChoice(2, choice);
          setTimeout(()=>this.setStep(3), 1000);
        },
        render: ()=><Display game={this.props.game} />
      },
      {
        setup: ()=>{
          this.props.game.scoreGame();
          this.props.setScore(
            this.props.game.getPlayer(1).score,   // Player 1 win count
            this.props.game.getPlayer(2).score,   // Player 2 win count
            this.props.game.ties                  // Number of ties
          );
        },
        render: ()=><Display game={this.props.game} reset={()=>this.setStep(0)} />
      }
    ];
  }

  // ToDo: Save and recover state on mount/unmount

  setStep(step) {
    this.steps[step].setup();
    this.setState({step: step});
  }

  setChoice(player, choice) {
    this.props.game.setPlayerChoice(player, choice);
    this.setStep(this.state.step + 1);
  }

  render() {
    return this.steps[this.state.step].render();
  }
}

export default GameUI;
