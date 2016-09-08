import React, {Component, PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';

import ListingCard from './ListingCard';

const ListingModal = ({show, hide, listing, submitBid, priceChange}) => {
	return (
		<Modal show={show} onHide={hide}>
      <Modal.Header closeButton style={styles.modalHeader}>
        <Modal.Title>New Listing</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modalBody}>
        <ListingCard
					listing={listing}
					submitBid={submitBid}
					priceChange={priceChange}/>
      </Modal.Body>
    </Modal>
	);
};

const styles = {
	modalBody: {
		background: '#fafafa'
	}
};

export default ListingModal;
