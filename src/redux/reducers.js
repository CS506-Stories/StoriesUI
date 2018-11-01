import { combineReducers } from 'redux';

import splashReducer from '../modules/splash/reducer';
import loginReducer from '../modules/login/reducer';

// Combine all the reducers
const rootReducer = combineReducers({ splashReducer, loginReducer });

export default rootReducer;
