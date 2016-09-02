import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function imageReducer(state = '', action) {
	switch (action.type) {
		case types.NEW_IMAGE:
			return action.imageUrl
		default:
			return state;
	}
}
