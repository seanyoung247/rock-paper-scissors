import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {show: props.show};
  }
  componentWillReceiveProps(nextProps) {
    this.setState({show: nextProps.show});  
  }
  render() {
    console.log("modal",this.state.show)
    return (
      this.state.show && (
        <p>Test</p>
      )
    );
  }
}

export default Modal;
