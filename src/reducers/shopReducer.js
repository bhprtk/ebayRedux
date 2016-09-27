import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function shopReducer(state = initialState.shop, action) {
	switch (action.type) {
		case types.GET_CURRENT_SHOP_SUCCESS:
			return action.shop;
		default:
			return state;
	}
}
