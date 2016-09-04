import React, {PropTypes} from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Masonry from 'react-masonry-component';

const DisplayListings = ({user, listings}) => {
	console.log ('user:', user)
	let displayListings = listings.map((listing, index) => {
		return (
			<Card key={index} className="col-md-6 col-sm-6 col-xs-12">
		    <CardHeader
		      title={user.displayName}
		      subtitle={moment(listing.date).fromNow()}
		      avatar={user.photoURL}
		    />
		    <CardMedia>
		      <img src={listing.imageUrl} />
		    </CardMedia>
		    <CardTitle title={listing.title} subtitle={listing.price} />
		    <CardText style={styles.cardText}>
		      {listing.description}
		    </CardText>
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
}

const styles = {
	cardText: {
		color: '#696969'
	}
}

DisplayListings.propTypes = {
	user: PropTypes.object.isRequired,
	listings: PropTypes.array.isRequired
};

export default DisplayListings;
