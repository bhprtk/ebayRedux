import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function shopReducer(state = initialState.shops, action) {
	switch (action.type) {
		case types.GET_ALL_SHOPS_SUCCESS:
			return action.shops
		default:
			return state;
	}
}
