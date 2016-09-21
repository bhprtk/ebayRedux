import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import moment from 'moment';

const ListingCard = ({listing, submitBid, priceChange}) => {
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
			<hr/>
			<CardActions>

				<form className="form-inline" onSubmit={submitBid}>
					<p><strong>Enter bid amount</strong></p>
				  <div className="form-group">
				    <div className="input-group">
				      <div className="input-group-addon">$</div>
								<input
									onChange={priceChange}
									type="number"
									className="form-control"
									min={listing.price}
									step="0.01"
									placeholder={listing.price}
									required />
				    </div>
						<button className="btn btn-success" style={styles.button}>Do it</button>
				  </div>
				</form>

			</CardActions>
		</Card>
	);
};

const styles = {
	cardText: {
		color: '#696969'
	},
	formDiv: {
		width: '100%'
	},
	button: {
		// marginLeft: 10
	}
};

export default ListingCard;
