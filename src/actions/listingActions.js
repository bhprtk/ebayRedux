import firebase from 'firebase';

import * as types from './actionTypes';

export function newListingsSuccess(listings) {
	return {
		type: types.NEW_LISTINGS_SUCCESS,
		listings
	};
}

export function getListingsByUserSuccess(myListings) {
	console.log ('myListings:', myListings)
	return {
		type: types.GET_LISTINGS_BY_USER_SUCCESS,
		myListings
	};
}

export function createListing(listingObj) {
	firebase.database().ref('listings/' + listingObj.listedBy.userId).push(listingObj);
}

export function newListings() {
	return dispatch => {
		return firebase.database().ref('listings').on('value', snap => {
			let listings = Object.values(snap.val());
			let newListings = [];
			listings.forEach(listing => {
				let tempListings = Object.values(listing);
				newListings.push(...tempListings);
			})
			return dispatch(newListingsSuccess(newListings));
		});
	}
}

export function getListingsByUser(user) {
	console.log ('user:', user)
	return dispatch => {
		console.log ('user:', user)
		return firebase.database().ref('listings/' + user.userId).on('value', snap => {
			const myListings = Object.values(snap.val());
			return dispatch(getListingsByUserSuccess(myListings));
		});
	};
}
