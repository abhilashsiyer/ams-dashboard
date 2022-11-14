import { combineReducers } from 'redux';

import userReducer from './User/user.reducer';
import resultsReducer from './Results/results.reducer';


export default combineReducers({
  user: userReducer,
  resultsData: resultsReducer,
});
