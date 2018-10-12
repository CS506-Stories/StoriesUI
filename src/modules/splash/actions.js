// This is where functions are written to interact with the API functions and dispatch
// the relevant actions based on the results

import UPDATE from './actionTypes';

// In this example, since we dont need to interact with the API, we are just returning an action.
// ( When you return something from this, its like dispatching it)
// which is then sent to the reducer.

// Note: disable ESLint on this line because you shouldnt export default on these.
// When there is more than 1 export in this file you can delete the ignore.
export const updateSplash = () => ( // eslint-disable-line
  {
    type: UPDATE,
    payload: {
      str: 'Button Pressed!',
    },
  }
);
