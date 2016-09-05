import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SplashPage from './components/splash/SplashPage';
import HomePage from './components/home/HomePage';
import ManageAddListing from './components/addListing/ManageAddListing';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={SplashPage} />
		<Route path="home" component={HomePage}>
			<Route path="addListing" component={ManageAddListing} />
		</Route>
	</Route>
);
