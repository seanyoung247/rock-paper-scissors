import React, { Fragment } from 'react';
import './modal.css';

function Modal(props) {
  return (
    <Fragment>
      {
        props.show && (
          <div className="modal-wrapper">
            <div className="modal-dialog">
              {props.children}
            </div>
          </div>
        )
      }
    </Fragment>
  );
}

export default Modal;
