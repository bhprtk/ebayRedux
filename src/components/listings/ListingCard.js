import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import moment from 'moment';

const ListingCard = ({listing}) => {
	const {listedBy} = listing;
	const date = moment(listing.date).fromNow();
	const price = 'Initial Price: $ ' + Number(listing.price).toFixed(2).toString();

	return (
		<Card>
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
				<form>
					<label>Enter bid amount</label>
					<input
						type="number"
						className="form-control"
						min={listing.price}
						step="0.01"
						placeholder={listing.price}/>
				</form>
			</CardActions>
		</Card>
	);
};

const styles = {
	cardText: {
		color: '#696969'
	}
};

export default ListingCard;
