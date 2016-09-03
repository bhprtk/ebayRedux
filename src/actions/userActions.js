import firebase from 'firebase';

import * as types from './actionTypes';

const provider = new firebase.auth.GoogleAuthProvider();

// export function loginSuccess(user) {
// 	return {
// 		type: types.GOOGLE_LOGIN_SUCCESS,
// 		user
// 	};
// }

export function gotoHome() {
	return {
		type: types.GOTO_HOME
	}
}

export function getCurrentUserSuccess(user) {
	return {
		type: types.GET_CURRENT_USER_SUCCESS,
		user
	}
}

function saveUser(user) {
	console.log ('user:', user)
	const {displayName, email, photoURL, uid} = user;
	const userObj = {
		displayName,
		email,
		photoURL,
		uid
	}				
	firebase.database().ref('users').once('value')
		.then(snap => {
			let userArr = [], users = snap.val();

			for(let key in users) {
				userArr.push(users[key]);
			}

			if(userArr.every(user => user.uid !== userObj.uid)) {
				firebase.database().ref('users').push(userObj);
			}
		})
}


export function googleLogin() {
	return function(dispatch) {
		return firebase.auth().signInWithPopup(provider).then(result => {
			const token = result.credential.accessToken;
			const user = result.user;
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
	return function(dispatch) { // thunk
		return firebase.auth().onAuthStateChanged(function(user) {
			if(user) {
				return (dispatch(getCurrentUserSuccess(user)));
			} else {
				console.log ('no user found:');
			}
		});

	};
}
