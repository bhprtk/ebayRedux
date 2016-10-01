import React from 'react';
import {Modal} from 'react-bootstrap';

const AddListingModal = ({shop, show, hide}) => {
	return (
		<Modal show={show} onHide={hide}>
      <Modal.Header closeButton style={styles.modalHeader}>
        <Modal.Title>{shop.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modalBody}>

				<h1>hwllo</h1>
      </Modal.Body>
    </Modal>
	);
};

const styles = {
	modalBody: {
		background: '#fafafa'
	},
	priceDiv: {
		padding: 5,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#696969',
		borderStyle: 'solid',
		background: "#fff"
	}
};

export default AddListingModal;
