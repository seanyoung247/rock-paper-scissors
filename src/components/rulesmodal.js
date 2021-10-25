import Modal from './modal.js';
import Button from './button.js';

import './rulesmodal.css';

import closeIcon from '../images/icon-close.svg';
import rulesImage from '../images/image-rules.svg';

class RulesModal extends Modal {
  modalContent() {
    return (
      <div>
        <h2 className="rules-title">Rules</h2>
        <div>
          <img
            className="rules-image"
            src={rulesImage}
            alt="Paper beats Rock beats Scissors beats paper"
          />
        </div>
        <Button
          title={<img src={closeIcon} alt="Close" />}
          className="modal-close rules-close"
          onClick={this.toggleShow} />
      </div>
    );
  }
}

export default RulesModal;
