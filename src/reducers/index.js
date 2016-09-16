import {combineReducers} from 'redux';
import user from './userReducer';
import newListings from './newListingsReducer';
import myListings from './myListingsReducer';
import listingById from './listingByIdReducer';


const rootReducer = combineReducers({
	user,
	newListings,
	myListings,
	listingById
});

export default rootReducer;
