import './display.css';
import './badges.css';

const messages = ["Tie", "Win", "Lose"];

function Display(props) {
  const game = props.game;
  const winner = game.winner;
  const p1 = game.getPlayer(1).choice;
  const p2 = game.getPlayer(2).choice;
  const c1 = (p1 >= 0) ? game.getValue(p1) : "empty";
  const c2 = (p2 >= 0) ? game.getValue(p2) : "empty";

  return (
    <div className="display">
      <div className="player-one">
        <div className={`badge ${c1}`}/>
      </div>
      <div className="player-two">
        <div className={`badge ${c2}`}/>
      </div>

      {winner && (
        <div>
          <p>You {messages[winner.id]}</p>
          <button onClick={props.reset}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Display;
