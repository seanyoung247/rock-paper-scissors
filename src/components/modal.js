import React, { Component } from 'react';

import './modal.css';

class Modal extends Component {
    render() {
      return (
        <React.Fragment>
          {
            this.props.show && (
              <div className="modal-wrapper">
                <div className="modal-dialog">
                  {this.props.children}
                </div>
              </div>
            )
          }
        </React.Fragment>
      );
    }
}

export default Modal;
