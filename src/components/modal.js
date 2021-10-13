import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      this.state.show && (
        <p>Test</p>
      )
    );
  }
}

export default Modal;
