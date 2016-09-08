import firebase from 'firebase';

import {getListingsByUser} from './listingActions';

import * as types from './actionTypes';

const provider = new firebase.auth.GoogleAuthProvider();

export function getCurrentUserSuccess(user) {
	return {
		type: types.GET_CURRENT_USER_SUCCESS,
		user
	};
}

function saveUser(user) {
	const {displayName, email, photoURL, uid} = user;
	const userObj = {
		displayName,
		email,
		photoURL,
		userId: uid
	};

	firebase.database().ref('users/' + uid).once('value')
		.then(snap => {
			if(!snap.val()) {
				firebase.database().ref('users/' + uid).push(userObj);
			}
		});
}


export function googleLogin() {
	return function(dispatch) {
		return firebase.auth().signInWithPopup(provider).then(result => {
			const token = result.credential.accessToken;
			const user = result.user;
			console.log ('user:', user)
			saveUser(user);
			return dispatch();
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
		return firebase.database().ref('users/' + user.uid).once('value')
		.then(snap => {
			let userObj, user = snap.val();
			for(let key in user) {
				userObj = user[key];
			}
			dispatch(getListingsByUser(userObj));
			return dispatch(getCurrentUserSuccess(userObj));
		});
	};
}
