import firebase from 'firebase';

import * as types from './actionTypes';

export function createListing(listingObj) {
	console.log('here');
	firebase.database().ref('listings').push(listingObj);
	firebase.database().ref('listings').on('value', snap => {
		console.log ('snap.val():', snap.val());
	});
}
