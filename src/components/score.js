import React, { Component } from 'react';

import './score.css';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {score: 12};
  }
  componentDidUpdate(prevProps) {
    const newProps = this.props;
    if (prevProps.score != newProps.score) {
      this.state.score = newProps.score;
    }
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
