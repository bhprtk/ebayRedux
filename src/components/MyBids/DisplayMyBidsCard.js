import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Link} from 'react-router';

const DisplayMyBidsCard = ({price, date, listing, user, bid}) => {
	const {listedBy} = listing;

	const displayBid = "Your bid: $" + bid.amount.toFixed(2).toString();
	const linkTo = `/home/singleListing/${listing._id}`

	return (
		<Card style={styles.card}>
			<Link className="list-group-item" to={linkTo}>
				<div className="media">
					<div className="media-left">
						<img src={listing.imageUrl} style={styles.image}/>
					</div>
					<div className="media-body">
						<h4 className="media-heading" style={styles.mediaHeading}>{listing.title} <small className="pull-right"><i>{date}</i></small></h4>
						{price}
						<div style={styles.displayBid} className="text-center">
							{displayBid}
						</div>
					</div>
				</div>
			</Link>

		</Card>

	);
};

const styles = {
	card: {
		margin: 20,
		// background: 'green',
		color: 'red'
	},
	cardText: {
		color: '#CFD8DC'
	},
	image: {
		height: 100,
		width: 100
	},
	displayBid: {
		// padding: 5,
		borderRadius: 5,
		width: "50%",
		borderWidth: 2,
		borderColor: '#696969',
		borderStyle: 'solid',
		background: "#fff",
		marginTop: 15
	},
	mediaHeading: {
		marginBottom: 15
	}
}

export default DisplayMyBidsCard;
