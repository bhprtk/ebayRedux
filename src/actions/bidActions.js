import axios from 'axios';
import * as types from './actionTypes';
import {updateUser} from './userActions';
import {getListingByIdSuccess} from './listingActions';

export function getBidsByUserSuccess(myBids) {
	return {
		type: types.GET_BIDS_BY_USER_SUCCESS,
		myBids
	}
}

export function addBidToListing(listing){
	return dispatch => {
		return axios.post('/api/bids', listing)
			.then(res => dispatch(getListingByIdSuccess(res.data[0])))
			.catch(err => console.log ('err:', err));
	};
}

export function getBidsByUser(userId)  {
	return dispatch => {
		return axios.get(`/api/bids/getBidsByUser/${userId}`)
			.then(res => dispatch(getBidsByUserSuccess(res.data)))
			.catch(err => console.log ('err:', err));
	};
}
