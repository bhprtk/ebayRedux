import React from 'react';
import Masonry from 'react-masonry-component';

import DisplayShopCard from './DisplayShopCard';

const DisplayShop = ({shops}) => {
	console.log ('shops:', shops);

	const displayShops = shops.map((shop, index) => {
		return (
			<DisplayShopCard shop={shop} key={index}/>
		);
	})
	const masonryOptions = {
		transitionDuration: 5
	};
	return (
		<div className="container">
			<Masonry options={masonryOptions}>
				{displayShops}
			</Masonry>
		</div>
	);
};

export default DisplayShop;
