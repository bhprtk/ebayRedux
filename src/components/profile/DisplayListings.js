import React from 'react';

const DisplayListings = ({user, listings}) => {
	console.log ('user:', user)
	console.log ('listings:', listings)
	let listingsArr = [];
	for(let key in listings) {
		console.log ('listsings[key]:', listings[key])
		listingsArr.push(listings[key]);
	}

	let displayListings = listingsArr.map((listing, index) => {
		return (
			<li key={index}>
				<p>{listing.title}</p>
				<p>{listing.price}</p>
				<p>{listing.description}</p>
			</li>
		)
	})

	return (
		<div>
			<h1>DisplayListings</h1>
			<ul>
				{displayListings}
			</ul>

		</div>
	)
}

export default DisplayListings;
