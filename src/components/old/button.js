import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button id={ this.props.id }
        className={ this.props.className }
        onClick={ this.props.onClick }>

          { this.props.children }
      </button>
    );
  }
}

export default Button;
