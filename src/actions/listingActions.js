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
	// getListings();
}

// export function getListings() {
// 	// const listingsDB = firebase.database().ref('listings');
// 	// return function(dispatch) {
// 	// 	// const p = new Promise((resolve, reject) => {
// 	// 		listingsDB.on('value', snap => {
// 	// 			// console.log ('snap.val():', snap.val());
// 	// 			const listings = snap.val();
// 	// 			console.log ('listings:', listings)
// 	// 			if(listings) {
// 	//
// 	// 				return dispatch(newData(listings));
// 	// 			}
// 	// 			// resolve(listings);
// 	// 		});
// 		// })
// 		// return p.then(res => {
// 		// 	console.log ('listings: after resolve', res)
// 		//
// 		// 	return dispatch(newData(res));
// 		// })
// 	// }
//
// 	// firebase.database().ref('listings').on('value', snap => {
// 	// 		console.log ('snap.val():', snap.val());
// 	// 		// return dispatch(newData(snap.val()));
// 	// 	});
// }
