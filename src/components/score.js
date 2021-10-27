import './score.css';

function Score(props) {
  return (
    <div className="score-panel">
      <p className="score-title"> Score </p>
      <p className="score-display"> {props.score || 0} </p>
    </div>
  );
}

export default Score;
