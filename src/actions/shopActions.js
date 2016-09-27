import axios from 'axios';
import * as types from './actionTypes';
import { getCurrentUserSuccess } from './userActions';


export function getAllShops() {
	return dispatch => {
		return axios.get('/api/shops')
			.then(res => dispatch(getAllShopsSuccess(res.data)))
			.catch(err => console.log ('err:', err))
	};
}

export function getAllShopsSuccess(shops) {
	return {
		type: types.GET_ALL_SHOPS_SUCCESS,
		shops
	};
}

export function getCurrentShopSuccess(shop) {
	return {
		type: types.GET_CURRENT_SHOP_SUCCESS,
		shop
	};
}

export function buyShopById(shopId, userId) {
	return dispatch => {
		return axios.put(`/api/shops/buyShopById/${shopId}/${userId}`)
			.then(res => dispatch(getCurrentUserSuccess(res.data[0])))
			.then(() => dispatch(getAllShops()))
			.catch(err => console.log ('err:', err));
	};
}
