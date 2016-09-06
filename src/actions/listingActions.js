import firebase from 'firebase';

import * as types from './actionTypes';

export function newListingsSuccess(listings) {
	return {
		type: types.NEW_LISTINGS_SUCCESS,
		listings
	}
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
			console.log ('newListings:', newListings)
			return dispatch(newListingsSuccess(newListings));
		});
	}
}

export function myListings() {
	return dispatch => {
		return firebase.database().ref()
	}
}
