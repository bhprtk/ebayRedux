import React, {PropTypes} from 'react';

const DisplayListings = ({user, listings}) => {
	console.log ('listings:', listings)
	let displayListings = listings.map((listing, index) => {
		return (
			<li key={index}>
				<p>{listing.title}</p>
				<p>{listing.price}</p>
				<p>{listing.description}</p>
			</li>
		);
	});

	return (
		<div>
			<h1>DisplayListings</h1>
			<ul>
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
