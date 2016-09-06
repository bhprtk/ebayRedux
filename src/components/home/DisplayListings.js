import React, {PropTypes} from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Masonry from 'react-masonry-component';

const DisplayListings = ({listings}) => {
	let displayListings = listings.map((listing, index) => {
		const date = moment(listing.date).fromNow();
		const {listedBy} = listing;
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
					<button className="btn btn-block btn-large" style={styles.bidButton}>
						<h4>
							BID
						</h4>
					</button>
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
	},
	bidButton: {
		background: '#66BB6A',
		borderColor: '#66BB6A',
		color: '#fff'
	}
};

DisplayListings.propTypes = {
	listings: PropTypes.array.isRequired
};

export default DisplayListings;
