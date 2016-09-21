import React, {PropTypes} from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const DisplayMyListings = ({listings}) => {
	let displayListings = listings.map((listing, index) => {
		const date = moment(listing.date).fromNow();
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
		const {listedBy} = listing;
		return (
			<Card key={index} style={styles.card}>
				<CardHeader
					title={listedBy.displayName}
					subtitle={date}
					avatar={listedBy.photoURL}
					/>
				<CardMedia>
					<img src={listing.imageUrl} />
				</CardMedia>
				<CardTitle
					title={listing.title}
					subtitle={price} />
				<CardText style={styles.cardText}>
					{listing.description}
				</CardText>
				<CardActions>
					<button className="btn btn-block btn-large" style={styles.bidButton}>
						<h4>
							BID
						</h4>
					</button>
				</CardActions>
			</Card>
		);
	});
	return (
		<div>
			{displayListings}
		</div>
	);
};

DisplayMyListings.propTypes = {
	listings: PropTypes.array.isRequired
};

const styles = {
	cardText: {
		color: '#696969'
	},
	bidButton: {
		background: '#66BB6A',
		borderColor: '#66BB6A',
		color: '#fff'
	}
};

export default DisplayMyListings;
