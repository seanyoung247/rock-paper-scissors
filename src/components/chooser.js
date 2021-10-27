import React, { Component } from 'react';

function Chooser(props) {
  return (
    <div>
      {props.choices.map((data, index)=>(
        <button key={index}
          onClick={()=>props.choose(props.player, index)}>
          {data}
        </button>
      ))}
    </div>
  );
}

export default Chooser;
