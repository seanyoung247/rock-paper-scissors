import React, { Component, Fragment } from 'react';

class GameUI extends Component {
  constructor(props) {
    super(props);
    this.steps = [
      ()=>this.stepOne(),
      ()=>this.stepTwo(),
      ()=>this.stepThree()
    ];
  }
  stepOne() {
    return (<p>step one</p>);
  }
  stepTwo() {
    return (<p>step two</p>);
  }
  stepThree() {
    return (<p>step three</p>);
  }
  render() {
    return this.steps[this.props.step];
  }
}
