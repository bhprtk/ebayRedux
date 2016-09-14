import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function newListingsReducer(state = initialState.listings, action) {
	switch (action.type) {
		case types.NEW_LISTINGS_SUCCESS:
			return action.listings;
		case types.ONE_NEW_LISTING:
			console.log ('action.listing:', action.listing)
			return [...state,
				Object.assign({}, action.listing)
			];
		default:
			return state;
	}
}
