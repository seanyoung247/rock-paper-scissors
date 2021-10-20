import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      className: props.className,
      onClick: (props.onClick ? props.onClick : this.onClick),
    };
  }

  onClick = () => {
    console.log("not implemented!");
  }

  render() {
    return (
      <button id={ this.state.id }
        className={ this.state.className }
        onClick={ this.state.onClick }>

          { this.state.title }
      </button>
    );
  }
}

export default Button;
