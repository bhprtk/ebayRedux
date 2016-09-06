import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SplashPage from './components/splash/SplashPage';
import HomePage from './components/home/HomePage';
import ListingsPage from './components/home/ListingsPage';
import ProfilePage from './components/profile/ProfilePage';
import MyListingsPage from './components/profile/MyListingsPage';
import MyBidsPage from './components/profile/MyBidsPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={SplashPage} />
		<Route path="home" component={HomePage}>
			<Route path="listings" component={ListingsPage} />
			<Route path="profile" component={ProfilePage}>
				<Route path="myListings" component={MyListingsPage}/>
				<Route path="myBids" component={MyBidsPage}/>
			</Route>
		</Route>
	</Route>
);
