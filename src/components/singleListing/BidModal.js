import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

const BidModal = ({show, hide}) => {
	return (
		<Modal show={show} onHide={hide}>
      <Modal.Header closeButton style={styles.modalHeader}>
        <Modal.Title>Bid Listing</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modalBody}>
        <h1>hello</h1>
      </Modal.Body>
    </Modal>
	)
}

const styles = {
	modalBody: {
		background: '#fafafa'
	}
};

export default BidModal;
