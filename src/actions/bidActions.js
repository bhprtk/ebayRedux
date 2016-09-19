import axios from 'axios';
import * as types from './actionTypes';
import {updateUser} from './userActions';

export function addBidToListing(listing){
	return dispatch => {
		console.log ('listing inside:', listing)
	};
}
