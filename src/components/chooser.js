import React, { Component } from 'react';

class Chooser extends Component {
  render() {
    return (
      <div>
        {this.props.choices.map((data, index)=>(
          <button key={index}
            onClick={()=>this.props.choose(this.props.player, index)}>
            {data}
          </button>
        ))}
      </div>
    );
  }
}

export default Chooser;
