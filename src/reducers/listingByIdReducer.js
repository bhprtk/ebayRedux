import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function listingByIdReducer(state = initialState.listingById, action) {
	switch (action.type) {
		case types.GET_LISTING_BY_ID_SUCCESS:
			return action.listing
		default:
			return state;
	}
}
