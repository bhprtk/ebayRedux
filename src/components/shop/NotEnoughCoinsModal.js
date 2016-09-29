import React from 'react';
import { Modal } from 'react-bootstrap';

const NotEnoughCoinsModal = ({show, hide}) => {
	return (
		<Modal show={show} onHide={hide}>
			<Modal.Header closeButton />
			<Modal.Body style={styles.modalBody}>
				<h4>You do not have enough coins.</h4>
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

export default NotEnoughCoinsModal;
