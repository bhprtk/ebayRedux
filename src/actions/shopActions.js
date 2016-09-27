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

export function buyShopById(shopId, userId) {
	return dispatch => {
		return axios.put(`/api/shops/buyShopById/${shopId}/${userId}`)
			.then(res => console.log ('res:', res))
			.catch(err => console.log ('err:', err));
	}
}
