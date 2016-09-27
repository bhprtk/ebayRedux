import {combineReducers} from 'redux';
import user from './userReducer';
import newListings from './newListingsReducer';
import myListings from './myListingsReducer';
import listingById from './listingByIdReducer';
import myBids from './myBidsReducer';
import shops from './shopsReducer';


const rootReducer = combineReducers({
	user,
	newListings,
	myListings,
	listingById,
	myBids,
	shops
});

export default rootReducer;
