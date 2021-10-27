import React, { Component } from 'react';
import Button from './button.js';

class Display extends Component {
  render() {
    const game = this.props.game;
    const winner = game.winner;
    return (
      <div>
        {game.getPlayer(1).choice} {game.getPlayer(2).choice}
        {winner && (
          <div>
            <p>Winner: {winner.name}</p>
            <Button onClick={this.props.reset}>
              Play Again
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default Display;
