import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function myListingsReducer(state = initialState.myListings, action) {
	switch (action.type) {
		case types.GET_LISTINGS_BY_USER_SUCCESS:
			return action.myListings;
		default:
			return state;
	}
}
