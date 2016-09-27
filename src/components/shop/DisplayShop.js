import React from 'react';
import Masonry from 'react-masonry-component';

import DisplayShopCard from './DisplayShopCard';
import BuyShopModal from './BuyShopModal';

const DisplayShop = ({shops, onClickBuy, showModal, hideModal}) => {
	const displayShops = shops.map((shop, index) => {
		return (
			<div key={index}>
				<DisplayShopCard
					shop={shop}
					onClickBuy={onClickBuy} />
				<BuyShopModal
					show={showModal}
					hide={hideModal}
					shop={shop} />
			</div>
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
