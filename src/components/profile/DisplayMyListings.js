import React, {PropTypes} from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const DisplayMyListings = ({user, listings}) => {
	let displayListings = listings.map((listing, index) => {
		const date = moment(listing.date).fromNow();
		const price = '$ ' + Number(listing.price).toFixed(2).toString();
		return (
			<Card key={index} style={styles.card} className="col-sm-7 col-md-7">
				<CardHeader
					title={user.displayName}
					subtitle={date}
					avatar={user.photoURL}
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

const styles = {
	card: {
		margin: 10
	},
	cardText: {
		color: '#696969'
	},
	bidButton: {
		background: '#66BB6A',
		borderColor: '#66BB6A',
		color: '#fff'
	}
};

DisplayMyListings.propTypes = {
	user: PropTypes.object.isRequired,
	listings: PropTypes.array.isRequired
};

export default DisplayMyListings;
