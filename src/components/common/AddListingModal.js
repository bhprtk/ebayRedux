import React, {Component, PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';

import AddListingForm from './AddListingForm';

const AddListingModal = ({show, hide, saveListing, onInputChange, onFileChange}) => {
	console.log ('preview:', preview)
	return (
		<Modal show={show} onHide={hide}>
      <Modal.Header closeButton style={styles.modalHeader}>
        <Modal.Title>New Listing</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modalBody}>
        <AddListingForm
					saveListing={saveListing}
					hide={hide}
					onInputChange={onInputChange} />
      </Modal.Body>
    </Modal>
	);
};

AddListingModal.propTypes = {
	show: PropTypes.bool.isRequired,
	hide: PropTypes.func.isRequired,
	saveListing: PropTypes.func.isRequired,
	onInputChange: PropTypes.func.isRequired
};

const styles = {
	modalBody: {
		background: '#fafafa'
	},
	modalHeader: {
		// background: '#fafafa'
	}
};

export default AddListingModal;
