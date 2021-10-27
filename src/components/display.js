import React, { Component } from 'react';

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
            <button onClick={this.props.reset}>
              Play Again
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Display;
