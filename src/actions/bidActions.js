import axios from 'axios';
import * as types from './actionTypes';
import {updateUser} from './userActions';
import {getListingsByUserSuccess} from './listingActions';

export function addBidToListing(listing){
	return dispatch => {
		return axios.post('/api/bids', listing)
			.then(res => dispatch(getListingsByUserSuccess(res.data.dbListing)))
			.catch(err => console.log ('err:', err));
	};
}
