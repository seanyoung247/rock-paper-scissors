import React, { Component } from 'react';
import Modal from './modal.js';

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
    console.log("rendering", this.state.showModal);
    return (
      <div>
        <button id={ this.state.id }
          className={ this.state.className }
          onClick={ this.state.onClick }>

            { this.state.title }
        </button>
      </div>
    );
  }
}

export default Button;
