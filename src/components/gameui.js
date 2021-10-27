import React, { Component } from 'react';
import Game from '../logic/game.js';

import Button from './button.js';

import Chooser from './chooser.js';
class GameUI extends Component {
  constructor(props) {
    super(props);
    this.state = {step: 0};
    this.game = new Game();
    this.steps = [
      {
        setup: null, // new round
        render: ()=>(<Chooser choices={this.game.choices} />)
      },
      {
        setup: null, // step timer
        render: ()=>this.stepTwo()
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

  // Player choice
  stepOne() {
    return (
      <div>
        <p>step one</p>
        <Button onClick={()=>this.setStep(1)}>
          Next step
        </Button>
      </div>
    );
  }
  // Display player choice
  stepTwo() {
    return (
      <div>
        <p>step two</p>
        <Button onClick={()=>this.setStep(2)}>
          Next step
        </Button>
      </div>
    );
  }
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

// stepOne() {
//   return (
//     <div>
//       {this.game.choices.map((data, index)=>(
//         <Button key={index} onClick={this.nextStep}>
//           {data}
//         </Button>
//       ))}
//     </div>
//   );
// }
