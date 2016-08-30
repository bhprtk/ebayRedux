import firebase from 'firebase';

import * as types from './actionTypes';

const currentUser = firebase.auth().currentUser;
console.log ('currentUser:', currentUser)

export function createListing(listingObj) {

}
