import { combineReducers } from 'redux';

import splashReducer from '../modules/splash/reducer';

// Combine all the reducers
const rootReducer = combineReducers({ splashReducer });

export default rootReducer;
