import React, { Component } from 'react';
import Button from './button.js';

import './modal.css';

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
      <div>
        <Button
          title="Rules"
          onClick={this.toggleShow} />
        {
          this.state.show && (
            <div className="modal-wrapper">
              <div className="modal-dialog">
                <h1>Rules</h1>
                <Button
                  title="Close"
                  className="modal-close"
                  onClick={this.toggleShow} />
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Modal;
