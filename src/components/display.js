import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div>
        {this.props.player1} {this.props.player2}
      </div>
    );
  }
}

export default Display;
