import React, { Component } from 'react';

import './score.css';

class Score extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="score-panel">
        <p className="score-title"> Score </p>
        <p className="score-display"> {this.props.score || 0} </p>
      </div>
    );
  }
}

export default Score;
