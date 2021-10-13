import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      className: props.className,
      clickHandler: (props.clickHandler ? props.clickHandler : this.clickHandler)
    };
  }

  clickHandler = () => {
    console.log("default");
  }

  render() {
    return (
      <button id={ this.state.id }
        className={ this.state.className } 
        onClick={ this.state.clickHandler }>
        { this.state.title }
      </button>
    );
  }
}

export default Button;
