import React, { Component } from 'react';

import Button from './button.js';

class Chooser extends Component {
  render() {
    return (
      <div>
        <p>step one</p>
        <Button onClick={()=>this.props.setStep(1)}>
          Next step
        </Button>
      </div>
    );
  }
}

export default Chooser;
