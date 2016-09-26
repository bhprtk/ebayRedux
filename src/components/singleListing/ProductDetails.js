import React, {PropTypes} from 'react';
import moment from 'moment';
import ReactCountdownClock from 'react-countdown-clock';
// import CountDown from 'react-simple-countdown';
import CountDown from '../common/CountDown';

import BidButton from './BidButton';

const ProductDetails = ({listing}) => {
	const date = moment(listing.date).fromNow();
	const price = 'Initial Price: $' + Number(listing.price).toFixed(2).toString();
	let highestBid;
	if(listing.highestBid) {
		highestBid = 'Highest Bid: $' + (listing.highestBid.amount).toFixed(2).toString();
	} else {
		highestBid = 'Highest Bid: $0.00';
	}
	const dateTest = new Date(2016, 8, 30);
	const dateTime = dateTest.getTime();
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
						<h4>{highestBid}</h4>
					</div>

				</div>

				<br/>
				<CountDown date={listing.date}/>
					<ReactCountdownClock seconds={dateTime}
	                     color="#000"
	                     alpha={0.9}
	                     size={300}
	                     onComplete={() => console.log ('lol:')}
											 timeFormat="hms" />

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
