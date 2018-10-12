import { combineReducers } from 'redux';

import { reducer as splashReducer } from '../styles';

// Combine all the reducers
const rootReducer = combineReducers({ splashReducer });

export default rootReducer;
