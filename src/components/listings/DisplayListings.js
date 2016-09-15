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
		console.log ('listedBy:', listedBy)
		const price = '$ ' + Number(listing.price).toFixed(2).toString();
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
					title={listing.title}
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
    transitionDuration: 0
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
	}
};

DisplayListings.propTypes = {
	listings: PropTypes.array.isRequired
};

export default DisplayListings;
