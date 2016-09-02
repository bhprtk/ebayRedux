import firebase from 'firebase';

import * as types from './actionTypes';


export function newData(listings) {
	return {
		type: types.NEW_DATA,
		listings
	};
}

export function createListing(listingObj) {
	firebase.database().ref('listings').push(listingObj);
}
