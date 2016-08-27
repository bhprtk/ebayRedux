import React, {Component} from 'react';
// import firebase from '../../FirebaseInit';
import firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();

class HomePage extends Component {

	constructor() {
		super();

		this.signIn = this.signIn.bind(this);
	}

	signIn() {
		firebase.auth().signInWithPopup(provider)
			.then(function(result) {
			  // This gives you a Google Access Token. You can use it to access the Google API.
			  var token = result.credential.accessToken;
			  // The signed-in user info.
			  var user = result.user;
				console.log ('user:', user)
			  // ...
			}).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;
			  // ...
			});
	}

	render() {
		return (
			<div>
				<h1>hello</h1>
				<button onClick={this.signIn}>
					login
				</button>
			</div>
		);
	}
}

export default HomePage;
