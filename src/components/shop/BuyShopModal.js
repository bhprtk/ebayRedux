import React from 'react';
import { Modal } from 'react-bootstrap';

const BuyShopModal = ({show, hide, shop}) => {
	console.log ('shop:', shop)
	return (
		<Modal show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Buy {shop.title}</Modal.Title>
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

export default BuyShopModal;
