import React, {PropTypes} from 'react';

const DisplayListings = ({user, listings}) => {
	let displayListings = listings.map((listing, index) => {
		return (
			<li key={index} className="list-group-item">
				<p>Title: {listing.title}</p>
				<p>Price: {listing.price}</p>
				<p>Description: {listing.description}</p>
			</li>
		);
	});

	return (
		<div className="container">
			<h1>DisplayListings</h1>
			<ul className="list-group">
				{displayListings}
			</ul>

		</div>
	);
}

DisplayListings.propTypes = {
	user: PropTypes.object.isRequired,
	listings: PropTypes.array.isRequired
};

export default DisplayListings;
