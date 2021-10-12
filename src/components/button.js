import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      clickHandler: props.clickHandler
    };
  }
  render() {
    return (
      <button onClick={ this.state.clickHandler }>
        { this.state.title }
      </button>
    );
  }
}

export default Button;
