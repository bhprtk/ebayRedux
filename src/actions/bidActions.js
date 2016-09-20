import axios from 'axios';
import * as types from './actionTypes';
import {updateUser} from './userActions';
import {getListingsByUserSuccess} from './listingActions';

export function addBidToListing(listing){
	return dispatch => {
		return axios.post('/api/bids', listing)
			.then(res => console.log ('res:', res))
			.catch(err => console.log ('err:', err));
	};
}
