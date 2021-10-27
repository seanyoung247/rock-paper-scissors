import React, { Component } from 'react';
import Game from '../logic/game.js';

import Button from './button.js';

class GameUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
    this.steps = [
      ()=>this.stepOne(),
      ()=>this.stepTwo(),
      ()=>this.stepThree(),
      ()=>this.stepFour()
    ];
    this.game = new Game();
  }
  
  setStep(step) {
    this.setState({step: step});
  }
  
  // Player choice
  stepOne() {
    return (
      <div>
        <p>step one</p>
        <Button onClick={()=>this.setStep(2)}>
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
        <Button onClick={()=>this.setStep(3)}>
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
        <Button onClick={()=>this.setStep(4)}>
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
        <Button onClick={()=>this.setStep(1)}>
          Restart
        </Button>
      </div>
    );
  }
  
  render() {
    return this.steps[this.state.step-1]();
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
