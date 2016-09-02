import {combineReducers} from 'redux';
import user from './userReducer';
import listings from './listingsReducer';
import imageUrl from './imageReducer';


const rootReducer = combineReducers({
	user,
	listings,
	imageUrl
});

export default rootReducer;
