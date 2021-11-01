import './display.css';
import './badges.css';

const messages = ["Tie", "Win", "Lose"];

function Display(props) {
  const game = props.game;
  const winner = game.winner;
  const p1 = game.getPlayer(1);
  const p2 = game.getPlayer(2);
  const c1 = (p1.choice >= 0) ? game.getValue(p1.choice) : "empty";
  const c2 = (p2.choice >= 0) ? game.getValue(p2.choice) : "empty";

  return (
    <div className="display">
      <div className="player one">
        <div className={`badge ${c1}`}>
          {c1}
        </div>
        <p className="name">{p1.name} picked</p>
      </div>
      <div className="player two">
        <div className={`badge ${c2}`}>
          {c2}
        </div>
        <p className="name">{p2.name} picked</p>
      </div>

      {winner && (
        <div className="winner-box">
          <h2>You {messages[winner.id]}</h2>
          <button onClick={props.reset}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Display;
