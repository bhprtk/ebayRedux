import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import moment from 'moment';

import InputBid from './InputBid';

const BidModal = ({show, hide, listing, onBidSubmit, onBidChange}) => {
	const date = moment(listing.date).fromNow();
	const price = 'Initial Price: $ ' + Number(listing.price).toFixed(2).toString();
	return (
		<Modal show={show} onHide={hide}>
      <Modal.Header closeButton style={styles.modalHeader}>
        <Modal.Title>{listing.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modalBody}>
				<div className="container-fluid">
					<div className="row">
						<div style={styles.priceDiv} className="text-center col-md-5 col-sm-5 col-xs-5">
							<h4>{price}</h4>
						</div>
						<div style={styles.priceDiv} className="text-center col-md-5 col-sm-5 col-xs-5 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
							<h4>Current Bid</h4>
						</div>
					</div>
					<br/>
					<div className="row">
						<InputBid
							listing={listing}
							onBidSubmit={onBidSubmit}
							onBidChange={onBidChange}/>
					</div>
				</div>

      </Modal.Body>
    </Modal>
	)
}

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

export default BidModal;
