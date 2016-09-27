import axios from 'axios';
import * as types from './actionTypes';

export function getAllShops() {
	return dispatch => {
		return axios.get('/api/shops')
			.then(res => dispatch(getAllShopsSuccess(res.data)))
			.catch(err => console.log ('err:', err))
	}
}

export function getAllShopsSuccess(shops) {
	return {
		type: types.GET_ALL_SHOPS_SUCCESS,
		shops
	}
}

export function buyShopById(shopId) {
	return dispatch => {
		return console.log ('shopId:', shopId);
	}
}
