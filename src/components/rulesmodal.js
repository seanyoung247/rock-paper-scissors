import React, { Component, Fragment } from 'react';

import Modal from './modal.js';
import Button from './button.js';

import './rulesmodal.css';
import closeIcon from '../images/icon-close.svg';
import rulesImage from '../images/image-rules.svg';

class RulesModal extends Component {
  constructor(props) {
    super(props);
    this.state = { show: this.props.show };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((state, props)=>({
      show: !state.show
    }));
  }

  render() {
    return (
      <Fragment>
        <Button
          title="Rules"
          className="modal-trigger"
          onClick={this.toggleShow} />
        <Modal show={this.state.show}>
          <h2 className="rules-title">Rules</h2>
          <img
            className="rules-image"
            src={rulesImage}
            alt="Paper beats Rock beats Scissors beats Paper"
          />
          <Button
            title={<img src={closeIcon} alt="Close" />}
            className="modal-close rules-close"
            onClick={this.toggleShow} />
        </Modal>
      </Fragment>
    );
  }
}

export default RulesModal;
