import React from 'react';
import { Modal } from 'react-bootstrap';

const NotEnoughRemainingModal = ({show, hide, shopTitle}) => {
	return (
		<Modal show={show} onHide={hide}>
			<Modal.Header closeButton />
			<Modal.Body style={styles.modalBody}>
				<h4>There aren't enough {shopTitle}s remaining.</h4>
			</Modal.Body>
			<Modal.Footer style={styles.footer}>
				<button className="btn btn-default" onClick={hide}>Cancel</button>
				<button className="btn btn-default">Buy</button>
			</Modal.Footer>
		</Modal>
	);
};

const styles = {
	modalBody: {
		background: '#fafafa'
	},
	footer: {
		background: '#fafafa'
	}
}

export default NotEnoughRemainingModal;
