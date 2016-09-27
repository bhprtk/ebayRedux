import React, {PropTypes} from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Masonry from 'react-masonry-component';

import BidButton from './BidButton';

const DisplayListings = ({listings, showModal}) => {
	let displayListings = listings.map((listing, index) => {
		const date = moment(listing.date).fromNow();
		const {listedBy} = listing;
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
		return (
			<Card key={index} className="col-md-6 col-sm-6 col-xs-12">
				<CardHeader
					title={listedBy.displayName}
					subtitle={date}
					avatar={listedBy.photoURL}
					/>
				<CardMedia>
					<img src={listing.imageUrl} />
				</CardMedia>
				<CardTitle
					title={<h1>{listing.title}</h1>}
					subtitle={price} />
				<CardText style={styles.cardText}>
					{listing.description}
				</CardText>
				<CardActions>
					<BidButton
						currentListing={listing}/>

				</CardActions>
			</Card>
		);
	});
	const masonryOptions = {
    transitionDuration: 5
	};
	return (
		<div
			className="container">
				<Masonry
					options={masonryOptions}>
					{displayListings}
				</Masonry>

		</div>
	);
};

const styles = {
	cardText: {
		color: '#696969'
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

DisplayListings.propTypes = {
	listings: PropTypes.array.isRequired
};

export default DisplayListings;
