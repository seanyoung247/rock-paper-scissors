import React, { Fragment } from 'react';

import Modal from './modal.js';
import Button from './button.js';

import './rulesmodal.css';
import closeIcon from '../images/icon-close.svg';
import rulesImage from '../images/image-rules.svg';

function RulesModal(props) {
  return (
    <Fragment>
      <Button
        title="Rules"
        className="modal-trigger"
        onClick={props.toggle} />
      <Modal show={props.show}>
        <h2 className="rules-title">Rules</h2>
        <img
          className="rules-image"
          src={rulesImage}
          alt="Paper beats Rock beats Scissors beats paper"
        />
        <Button
          title={<img src={closeIcon} alt="Close" />}
          className="modal-close rules-close"
          onClick={props.toggle} />
      </Modal>
    </Fragment>
  );
}

export default RulesModal;
