import React from 'react';

import DisplayMyShopsCard from './DisplayMyShopsCard';

const DisplayMyShops = ({shops}) => {
	console.log ('shops:', shops)
	const displayShops = shops.map((shop, index) => {
		return (
			<DisplayMyShopsCard
				shop={shop}
				key={index} />
		);
	})

	return (
		<div>
			{displayShops}
		</div>
	);
}

export default DisplayMyShops;
