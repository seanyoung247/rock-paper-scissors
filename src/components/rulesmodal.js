import React, { Component, Fragment } from 'react';

import Modal from './modal.js';

import './rulesmodal.css';
import closeIcon from '../images/icon-close.svg';
import basicRules from '../images/image-rules.svg';
import spockRules from '../images/image-rules-bonus.svg';

const rules = {basic: basicRules, spock: spockRules};

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
        <button className="modal-trigger" onClick={this.toggleShow}>
          Rules
        </button>
        <Modal show={this.state.show}>
          <h2 className="rules-title">Rules</h2>
          <img
            className="rules-image"
            src={rules[this.props.rules]}
            alt="Paper beats Rock beats Scissors beats Paper"
          />
          <button className="rules-close" onClick={this.toggleShow}>
            <img src={closeIcon} alt="Close" />
          </button>
        </Modal>
      </Fragment>
    );
  }
}

RulesModal.defaultProps = {
  show: false,
  rules: "basic"
}

export default RulesModal;
