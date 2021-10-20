import React, { Component } from 'react';
import Button from './button.js';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {show: props.show || false};
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((state, props)=>({
      show: !state.show
    }));
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
