import React, {PropTypes} from 'react';
import moment from 'moment';

import BidButton from './BidButton';

const ProductDetails = ({listing}) => {
	const date = moment(listing.date).fromNow();
	const price = 'Initial Price: $ ' + Number(listing.price).toFixed(2).toString();
	return (
			<div className="col-md-6 col-sm-6">
				<BidButton
					listing={listing}/>
				<h1>{listing.title}</h1>
				<br/>
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
					<p><strong>Description:</strong></p>
					<p>{listing.description}</p>

				</div>
			</div>

	);
};

const styles = {
	priceDiv: {
		// width: 250,
		padding: 5,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#696969',
		borderStyle: 'solid',
		background: "#fff"
	}
}

export default ProductDetails;
