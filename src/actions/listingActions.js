import firebase from 'firebase';
import axios from 'axios';
import * as types from './actionTypes';
import {updateUser} from './userActions';

export function newListingsSuccess(listings) {
	return {
		type: types.NEW_LISTINGS_SUCCESS,
		listings
	};
}

export function oneNewListing(listing) {
	return {
		type: types.ONE_NEW_LISTING,
		listing
	};
}

export function getAllListingsSuccess(listings) {
	return {
		type: types.GET_ALL_LISTINGS_SUCCESS,
		listings
	};
}

export function getListingsByUserSuccess(myListings) {
	return {
		type: types.GET_LISTINGS_BY_USER_SUCCESS,
		myListings
	};
}

export function getListingByIdSuccess(listing) {
	return {
		type: types.GET_LISTING_BY_ID_SUCCESS,
		listing
	}
}

export function createListing(listingObj) {
	return dispatch => {
		return axios.post('/api/listings', listingObj)
		.then(res => {
			console.log ('res:', res)
			return dispatch(oneNewListing(res.data[0]))
		})
		.catch(err => console.log ('err:', err));
	};
}

export function addBidToListing(currentListing, bidAmount) {
	firebase.database().ref(`listings/${currentListing.listedBy.userId}`).update({currentBid: bidAmount});
}

export function getAllListings() {
	return dispatch => {
		return axios.get('/api/listings/')
			.then(res => dispatch(getAllListingsSuccess(res.data)))
			.catch(err => console.log ('err:', err));
	}
}

export function getListingsByUser(user) {
	return dispatch => {
		return axios.get(`/api/users/getListingsByUser/${user._id}`)
			.then(res => {
				console.log ('res:', res)
				dispatch(getListingsByUserSuccess(res.data.listings))
			})
			.catch(err => console.log ('err:', err))
	};
}

export function getListingById(listingId) {
	return dispatch => {
		return axios.get(`/api/listings/${listingId}`)
			.then(res => dispatch(getListingByIdSuccess(res.data)))
			.catch(err => console.log ('err:', err))
	}
}
