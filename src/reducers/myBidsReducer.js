import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function myBidsReducer(state = initialState.myBids, action) {
	switch (action.type) {
		case types.GET_BIDS_BY_USER_SUCCESS:
			return action.myBids
		default:
			return state;
	}
}
