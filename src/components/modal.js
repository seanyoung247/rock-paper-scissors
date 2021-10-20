import React, { Component } from 'react';
import Button from './button.js';

import './modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      show: props.show || false
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((state, props)=>({
      show: !state.show
    }));
  }

  render() {
  modalContent() {
    return (
      <div>
        <h2>Not Yet Implemented</h2>
        <Button
          title="Close"
          className="modal-close"
          onClick={this.toggleShow} />
      </div>
    );
  }
        <Button
          title="Rules"
          onClick={this.toggleShow} />
        {
          this.state.show && (
            <div className="modal-wrapper">
              <div className="modal-dialog">
                <h1>Rules</h1>
                <Button
                  title={<img src="images/icon-close.svg" />}
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
