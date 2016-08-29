import React, {Component, PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
class AddListingModal extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>

          </Modal.Body>
          <Modal.Footer>
            {/*<Button onClick={this.close}>Close</Button>*/}
          </Modal.Footer>
        </Modal>
		);
	}
}

export default AddListingModal;
