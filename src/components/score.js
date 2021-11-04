import ToolTip from './tooltip.js';

import './score.css';

function Score(props) {
  return (
    <div className="score-panel tooltipped">
      <p className="score-title"> Score </p>
      <p className="score-display"> {props.score.player || 0} </p>
      <ToolTip position="bottom">
        <span>Wins: {props.score.player}, </span>
        <span>Loses: {props.score.opponent}, </span>
        <span>Ties: {props.score.ties} </span>
      </ToolTip>
    </div>
  );
}

export default Score;
