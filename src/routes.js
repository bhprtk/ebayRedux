import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SplashPage from './components/splash/SplashPage';
import HomePage from './components/home/HomePage';
import ListingsPage from './components/listings/ListingsPage';
import ProfilePage from './components/profile/ProfilePage';
import MyListingsPage from './components/listings/MyListingsPage';
import MyBidsPage from './components/MyBids/MyBidsPage';
import SingleListingPage from './components/singleListing/SingleListingPage';
import BidsWon from './components/profile/BidsWon';
import ShopPage from './components/shop/ShopPage';
import MyShops from './components/profile/MyShops';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={SplashPage} />
		<Route path="home" component={HomePage}>
			<Route path="listings" component={ListingsPage} />
			<Route path="singleListing/:listingId" component={SingleListingPage} />
			<Route path="shop" component={ShopPage} />
			<Route path="profile" component={ProfilePage}>
				<Route path="myListings" component={MyListingsPage}/>
				<Route path="myBids" component={MyBidsPage}/>
				<Route path="bidsWon" component={BidsWon}/>
				<Route path="myShops" component={MyShops}/>
			</Route>
		</Route>
	</Route>
);
