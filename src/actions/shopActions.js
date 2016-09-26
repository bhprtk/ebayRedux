import axios from 'axios';
import * as types from './actionTypes';

export function createShop(shop) {
	return dispatch => {
		return axios.post('/api/shop', shop)
			.then(res => console.log ('res:', res))
			.catch(err => console.log ('err:', err))
	}
}
