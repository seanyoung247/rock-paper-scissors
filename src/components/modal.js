import React, { Fragment } from 'react';
import './modal.css';

function Modal(props) {
  return (
    <Fragment>
      {
        props.show && (
          <div className="modal-wrapper" onClick={props.toggle}>
            <div className="modal-dialog" onClick={(e)=>e.stopPropagation()}>
              {props.children}
            </div>
          </div>
        )
      }
    </Fragment>
  );
}

export default Modal;
