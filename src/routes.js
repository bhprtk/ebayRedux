import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import ProfilePage from './components/profile/ProfilePage';
import ManageAddListing from './components/addListing/ManageAddListing';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="profile" component={ProfilePage}>
			<Route path="addListing" component={ManageAddListing} />
		</Route>
	</Route>
);
