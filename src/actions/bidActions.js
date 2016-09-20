import axios from 'axios';
import * as types from './actionTypes';
import {updateUser} from './userActions';
import {getListingByIdSuccess} from './listingActions';

export function addBidToListing(listing){
	return dispatch => {
		return axios.post('/api/bids', listing)
			.then(res => dispatch(getListingByIdSuccess(res.data[0])))
			.catch(err => console.log ('err:', err));
	};
}
