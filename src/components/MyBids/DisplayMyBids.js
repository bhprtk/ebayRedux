import React from 'react';
import moment from 'moment';

import DisplayMyBidsCard from './DisplayMyBidsCard';

const DisplayMyBids = ({bids}) => {
	const displayByBids = bids.map((bid, index) => {
		const {date, listing, user} = bid;
		const displayDate = moment(date).fromNow();
		const tempPrice = 'Initial Price: $' + Number(listing.price).toFixed(2).toString();
		let highestBid;
		if(listing.highestBid) {
			highestBid = 'Highest Bid: $' + (listing.highestBid.amount).toFixed(2).toString();
		} else {
			highestBid = 'Highest Bid: $0.00';
		}
		const price = (
			<div className="row">
				<div style={styles.priceDiv} className="text-center col-md-5 col-sm-5 col-xs-5">
					<h4>{tempPrice}</h4>
				</div>
				<div style={styles.priceDiv} className="text-center col-md-5 col-sm-5 col-xs-5 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
					<h4>{highestBid}</h4>
				</div>
			</div>
		)
	})
	return (
		<div>
			<DisplayMyBidsCard />
		</div>
	);
};

export default DisplayMyBids;
