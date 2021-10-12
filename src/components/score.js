import React, { Component } from 'react';

import './score.css';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {score: 12};
  }
  render() {
    return (
      <div className="score-panel">
        <p className="score-title"> Score </p>
        <p className="score-display"> {this.state.score} </p>
      </div>
    );
  }
}

export default Score;
