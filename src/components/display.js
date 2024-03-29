import './display.css';
import './badges.css';

const messages = ["Tied", "Win", "Lose"];

function Display(props) {
  const game = props.game;
  const winner = game.winner;
  const wId = (winner) ? winner.id : 0;
  const p1 = game.getPlayer(1);
  const p2 = game.getPlayer(2);
  const c1 = (p1.choice >= 0) ? game.getValue(p1.choice) : "empty";
  const c2 = (p2.choice >= 0) ? game.getValue(p2.choice) : "empty";

  return (
    <div className="display">
      <div className="player one">
        <div className="player-container">
          <div className={`badge-container ${(wId === 1) && 'won'}`}>
            <div className={`badge ${c1}`}>
              {c1}
            </div>
          </div>
          <p className="name">{p1.name} picked</p>
        </div>
      </div>
      <div className="player two">
        <div className="player-container">
          <div className={`badge-container ${(wId === 2) && 'won'}`}>
            <div className={`badge ${c2}`}>
              {c2}
            </div>
          </div>
          <p className="name">{p2.name} picked</p>
        </div>
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
