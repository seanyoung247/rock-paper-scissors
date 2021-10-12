import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button onClick={ this.state.clickHandler }>
      </button>
    );
  }
}

export default Button;
