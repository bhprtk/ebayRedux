import React from 'react';
import Masonry from 'react-masonry-component';

import DisplayShopCard from './DisplayShopCard';
import BuyShopModal from './BuyShopModal';

const DisplayShop = ({shops, onClickBuy, showModal, hideModal, user}) => {
	const displayShops = shops.map((shop, index) => {
		return (
			<div key={index} className="col-md-6 col-xs-6 col-sm-6">
				<DisplayShopCard
					shop={shop}
					onClickBuy={onClickBuy} />
				<BuyShopModal
					show={showModal}
					hide={hideModal}
					shop={shop}
					user={user} />
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
