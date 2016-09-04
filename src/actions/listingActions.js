import firebase from 'firebase';

import * as types from './actionTypes';

export function newListingsSuccess(listings) {
	return {
		type: types.NEW_LISTINGS_SUCCESS,
		listings
	}
}

export function createListing(listingObj) {
	firebase.database().ref('listings/' + listingObj.listedBy).push(listingObj);
}

export function newListings() {
	return dispatch => {
		return firebase.database().ref('listings').on('value', snap => {
			let listings = Object.values(snap.val());
			listings = Object.values(listings[0]);
			return dispatch(newListingsSuccess(listings));
		});
	}
}
