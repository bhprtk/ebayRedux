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
	getListings();
}

export function getListings() {
	return function(dispatch) {
		const p = new Promise((resolve, reject) => {
			firebase.database().ref('listings').on('value', snap => {
				// console.log ('snap.val():', snap.val());
				const listings = snap.val();
				resolve (((listings)));
			});
		})
		return p.then(res => {
			return dispatch(newData(res));
		})
	}

	// firebase.database().ref('listings').on('value', snap => {
	// 		console.log ('snap.val():', snap.val());
	// 		// return dispatch(newData(snap.val()));
	// 	});
}
