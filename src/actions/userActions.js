import firebase from 'firebase';
import axios from 'axios';
import {getListingsByUser} from './listingActions';

import * as types from './actionTypes';

const provider = new firebase.auth.GoogleAuthProvider();

export function getCurrentUserSuccess(user) {
	return {
		type: types.GET_CURRENT_USER_SUCCESS,
		user
	};
}

export function updateUser(user) {
	return {
		type: types.UPDATE_USER,
		user
	}
}

export function saveUser(user) {
	return dispatch => {
		const {displayName, email, photoURL, uid} = user;
		const userObj = {
			displayName,
			email,
			photoURL,
			uid,
			coins: 3000
		};
		axios.get(`/api/users/${user.email}`)
			.then(res => {
				if(res.data) {
					return dispatch(getCurrentUserSuccess(res.data));
				} else {
					return axios.post('/api/users', userObj)
					.then(res => {
						return dispatch(getCurrentUserSuccess(res.data));
					});
				}
			});
	}
}

export function googleLogin() {
	return function(dispatch) {
		return firebase.auth().signInWithPopup(provider).then(result => {
			const token = result.credential.accessToken;
			const user = result.user;
			return dispatch(saveUser(user));
		}).catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.email;
			const credential = error.credential;
		});
	};
}

export function getCurrentUser() {
	return dispatch => {
		firebase.auth()
		.onAuthStateChanged(user => {
			if(user) {
				return dispatch(getCurrentUserFromDb(user));
			} else {
				console.log ('no user found:');
			}
		});
	};
}

export function getCurrentUserFromDb(user) {
	return dispatch => {
		return axios.get(`/api/users/${user.email}`)
			.then(res => dispatch(getCurrentUserSuccess(res.data)))
			.catch(err => console.log ('err:', err));
	};
}
