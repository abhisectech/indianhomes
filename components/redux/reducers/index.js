// reducers/index.js
import { combineReducers } from 'redux';
import firstStepReducer from './firstStepReducer'; // Import your first step reducer

const rootReducer = combineReducers({
  firstStep: firstStepReducer,
  // Add other reducers as needed
});

export default rootReducer;
