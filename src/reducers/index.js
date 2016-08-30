import {combineReducers} from 'redux';
import user from './userReducer';
import listings from './listingsReducer';


const rootReducer = combineReducers({
	user,
	listings
});

export default rootReducer;
