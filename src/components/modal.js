import React, { Component } from 'react';
import Button from './button.js';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {show: props.show};
  }

  render() {
    return (
        <Button
          title="Rules"
          onClick={this.toggleShow} />
    );
  }
}

export default Modal;
