import React from 'react';
import moment from 'moment';

import DisplayMyBidsCard from './DisplayMyBidsCard';

const DisplayMyBids = ({bids}) => {
	const displayBids = bids.map((bid, index) => {
		const {date, listing, user} = bid;
		const displayDate = moment(date).format('llll');
		const tempPrice = 'Initial Price: $' + Number(listing.price).toFixed(2).toString();
		let highestBid;
		if(listing.highestBid) {
			highestBid = 'Highest Bid: $' + (listing.highestBid.amount).toFixed(2).toString();
		} else {
			highestBid = 'Highest Bid: $0.00';
		}
		const price = (
			<p>
				<span>{tempPrice}</span>
				<span className="pull-right">{highestBid}</span>
			</p>
		)
		// const price = (
		// 	<div className="row">
		// 		<div style={styles.priceDiv} className="text-center col-md-5 col-sm-5 col-xs-5">
		// 			<p>{tempPrice}</p>
		// 		</div>
		// 		<div style={styles.priceDiv} className="text-center col-md-5 col-sm-5 col-xs-5 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
		// 			<p>{highestBid}</p>
		// 		</div>
		// 	</div>
		// )
		return (
			<div key={index}>
				<DisplayMyBidsCard
					price={price}
					date={displayDate}
					listing={listing}
					user={user}
					bid={bid}/>
			</div>
		);
	})
	return (
		<div className="list-group scrollable-bid" style={styles.scrollable}>
			{displayBids}
		</div>
	)
};

const styles = {
	scrollable: {
		background: '#f9f9f9'
	}
	// priceDiv: {
	// 	padding: 5,
	// 	borderRadius: 10,
	// 	borderWidth: 2,
	// 	borderColor: '#696969',
	// 	borderStyle: 'solid',
	// 	background: "#fff"
	// }
}

export default DisplayMyBids;
