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
			<div className="row" style={styles.price}>
				<div style={styles.priceDiv} className="text-center col-md-5 col-sm-5 col-xs-5">
					<strong>{tempPrice}</strong>
				</div>
				<div style={styles.priceDiv} className="text-center col-md-5 col-sm-5 col-xs-5 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
					<strong>{highestBid}</strong>
				</div>
			</div>
		)
		const {listedBy} = listing;
		return (
			<Card key={index} style={styles.card} className="col-md-10 col-sm-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
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
			</Card>
		);
	});
	return (
		<div className="scrollable-listings" style={styles.container}>
			{displayListings}
		</div>
	);
};

DisplayMyListings.propTypes = {
	listings: PropTypes.array.isRequired
};

const styles = {
	container: {
		background: "#f9f9f9"
	},
	card: {
		margin: 20
	},
	cardText: {
		color: '#696969'
	},
	bidButton: {
		background: '#66BB6A',
		borderColor: '#66BB6A',
		color: '#fff'
	},
	priceDiv: {
		// padding: 5,
		// borderRadius: 10,
		// borderWidth: 2,
		// borderColor: '#696969',
		// borderStyle: 'solid',
		background: "#fff"
	},
	price: {
		marginTop: 10
	}
};

export default DisplayMyListings;
