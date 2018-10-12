import { createStore } from 'redux';
import reducers from './reducers';

// This is where we will add enhancers if we want

// Connect our store to the reducers
export default createStore(reducers);
