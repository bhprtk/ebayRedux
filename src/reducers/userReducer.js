import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
	switch (action.type) {
		case types.GOOGLE_LOGIN_SUCCESS:
			return action.user;
		case types.GET_CURRENT_USER_SUCCESS:
			return action.user;
		default:
			return state;
	}
}
