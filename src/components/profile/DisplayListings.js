import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const DisplayListings = ({user, listings}) => {
	let displayListings = listings.map((listing, index) => {
		return (

			<Card className="col-md-6 col-sm-6 col-xs-6" key={index}>
		    <CardHeader
		      title="URL Avatar"
		      subtitle="Subtitle"
		      avatar="images/jsa-128.jpg"
		    />
		    <CardMedia>
		      <img src={listing.imageUrl} />
		    </CardMedia>
		    <CardTitle title={listing.title} subtitle={listing.price} />
		    <CardText>
		      {listing.description}
		    </CardText>
		  </Card>


		);
	});

	return (
		<div className="container">
			<h1>DisplayListings</h1>
 				{displayListings}

		</div>
	);
}

DisplayListings.propTypes = {
	user: PropTypes.object.isRequired,
	listings: PropTypes.array.isRequired
};

export default DisplayListings;
