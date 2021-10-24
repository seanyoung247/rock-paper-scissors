import Modal from './modal.js';
import Button from './button.js';

import './rulesmodal.css';
import closeIcon from '../images/icon-close.svg';

class RulesModal extends Modal {
  modalContent() {
    return (
      <div>
        <h2>Rules</h2>
        <div>
        </div>
        <Button
          title={<img src={closeIcon} alt="Close" />}
          className="modal-close"
          onClick={this.toggleShow} />
      </div>
    );
  }
}

export default RulesModal;
