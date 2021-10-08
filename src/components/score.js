import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {score: 0};
  }
  render() {
    return (
      <div>
        <p> Score </p>
        <p> {this.state.score} </p>
      </div>
    );
  }
}

export default Score;
