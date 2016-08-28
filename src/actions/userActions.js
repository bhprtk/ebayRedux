import firebase from 'firebase';

import * as types from './actionTypes';

const provider = new firebase.auth.GoogleAuthProvider();

export function loginSuccess(user) {
	return {
		type: types.GOOGLE_LOGIN_SUCCESS,
		user
	};
}

export function googleLogin() {
	return function(dispatch) {
		firebase.auth().signInWithPopup(provider).then(result => {
			const token = result.credential.accessToken;
			const user = result.user;
			dispatch(loginSuccess(user));
		}).catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.email;
			const credential = error.credential;
		});
	};
}
