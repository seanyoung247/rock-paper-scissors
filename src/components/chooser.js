import React from 'react';

import './chooser.css';

function Chooser(props) {
  const count = { "--n": props.choices.length };// as React.CSSProperties;
  return (
    <div className="chooser">
      <ul style={count}>
        {props.choices.map((data, index)=>(
          <li key={index}>
            <button
              className={`choice-icon ${data}`}
              onClick={()=>props.choose(props.player, index)}>
              {data}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chooser;
