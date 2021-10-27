
function Display(props) {
  const game = props.game;
  const winner = game.winner;
  const p1 = game.getPlayer(1).choice;
  const p2 = game.getPlayer(2).choice;

  return (
    <div>
      {(p1 >= 0) ? game.getValue(p1) : "none"} {(p2 >= 0) ? game.getValue(p2) : "none"}
      {winner && (
        <div>
          <p>Winner: {winner.name}</p>
          <button onClick={props.reset}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Display;
