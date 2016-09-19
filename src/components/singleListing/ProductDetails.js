import React, {PropTypes} from 'react';
import moment from 'moment';

const ProductDetails = ({listing}) => {
	const date = moment(listing.date).fromNow();
	const price = 'Initial Price: $ ' + Number(listing.price).toFixed(2).toString();
	return (
		<div className="col-md-6 col-sm-6">
			<h1>{listing.title}</h1>
			<br/>
			<div style={styles.priceDiv} className="text-center">
				<h4>{price}</h4>
			</div>
			<br/>
			<div style={styles.priceDiv} className="text-center">
				<h4>Current Bid</h4>
			</div>
			<br/>
			<div>
				<p><strong>Description:</strong></p>
				<p>{listing.description}</p>

			</div>
		</div>
	);
};

const styles = {
	priceDiv: {
		width: 250,
		padding: 5,
		// borderRadius: 10,
		borderWidth: 2,
		borderColor: '#696969',
		borderStyle: 'solid',
		background: "#fff"
	}
}

export default ProductDetails;
