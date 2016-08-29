import React, {Component, PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';

import AddListingForm from './AddListingForm';

class AddListingModal extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Header closeButton style={styles.modalHeader}>
            <Modal.Title>Add Listing</Modal.Title>
          </Modal.Header>
          <Modal.Body style={styles.modalBody}>
            <AddListingForm />

          </Modal.Body>
          <Modal.Footer style={styles.modalFooter}>
            <Button onClick={this.props.hide}>Close</Button>
          </Modal.Footer>
        </Modal>
		);
	}
}

AddListingModal.propTypes = {
	show: PropTypes.bool.isRequired,
	hide: PropTypes.func.isRequired
}

const styles = {
	modalBody: {
		background: '#fafafa'
	},
	modalHeader: {
		// background: '#fafafa'
	},
	modalFooter: {
		// background: '#fafafa'
	},
}

export default AddListingModal;
