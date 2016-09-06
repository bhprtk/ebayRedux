import {combineReducers} from 'redux';
import user from './userReducer';
import newListings from './newListingsReducer';
import imageUrl from './imageReducer';


const rootReducer = combineReducers({
	user,
	newListings,
	imageUrl
});

export default rootReducer;
