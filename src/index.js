/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {getListings} from './actions/listingActions';
import './FirebaseInit';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import {
	googleLogin,
	getCurrentUser,
	getCurrentUserFromDb,
} from './actions/userActions';

import { newListings } from './actions/listingActions';

const store = configureStore();
store.dispatch(googleLogin());
store.dispatch(getCurrentUser());
store.dispatch(newListings());
// store.dispatch(getCurrentUserFromDb());
// store.dispatch(getListings());

render (
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
