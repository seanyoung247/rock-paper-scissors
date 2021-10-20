import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {show: props.show};
  }

  render() {
    return (
      this.state.show && (
        <p>Test</p>
      )
    );
  }
}

export default Modal;
