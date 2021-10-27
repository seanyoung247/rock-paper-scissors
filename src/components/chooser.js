import React, { Component } from 'react';

import Button from './button.js';

class Chooser extends Component {
  render() {
    return (
      <div>
        {this.props.choices.map((data, index)=>(
          <Button key={index}
            onClick={()=>this.props.choose(this.props.player, index)}>
            {data}
          </Button>
        ))}
      </div>
    );
  }
}

export default Chooser;
