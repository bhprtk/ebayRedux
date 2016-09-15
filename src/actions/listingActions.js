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
	}
}

export function getListingsByUserSuccess(myListings) {
	return {
		type: types.GET_LISTINGS_BY_USER_SUCCESS,
		myListings
	};
}

export function createListing(listingObj) {
	console.log ('listingObj:', listingObj)
	// firebase.database().ref('listings/' + listingObj.listedBy.userId).push(listingObj);
	return dispatch => {
		console.log('here')
		return axios.post('/api/listings', listingObj)
		.then(res => {
			console.log ('res:', res)
			return dispatch(oneNewListing(res.data[0]))
		})
		.catch(err => console.log ('err:', err));

	}
}

export function addBidToListing(currentListing, bidAmount) {
	firebase.database().ref(`listings/${currentListing.listedBy.userId}`).update({currentBid: bidAmount});
}

export function newListings() {
	return dispatch => {
		return firebase.database().ref('listings').on('value', snap => {
			console.log ('snap.val():', snap.val())
			let listings = Object.values(snap.val());
			let newListings = [];
			listings.forEach(listing => {
				let tempListings = Object.values(listing);
				newListings.push(...tempListings);
			});
			return dispatch(newListingsSuccess(newListings));
		});
	};
}

export function getListingsByUser(user) {
	return dispatch => {
		return firebase.database().ref('listings/' + user.userId).on('value', snap => {
			const myListings = Object.values(snap.val());
			return dispatch(getListingsByUserSuccess(myListings));
		});
	};
}
