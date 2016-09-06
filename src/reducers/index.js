import {combineReducers} from 'redux';
import user from './userReducer';
import newListings from './newListingsReducer';
import myListings from './myListingsReducer';
import imageUrl from './imageReducer';


const rootReducer = combineReducers({
	user,
	newListings,
	myListings,
	imageUrl
});

export default rootReducer;
