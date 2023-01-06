import { combineReducers } from 'redux';

import userReducer from './User/user.reducer';
import resultsReducer from './Results/results.reducer';
import matricesReducer from './Matrices/matrices.reducer';
import projectsReducer from './Projects/projects.reducer';


export default combineReducers({
  user: userReducer,
  resultsData: resultsReducer,
  matricesData: matricesReducer,
  projectsData: projectsReducer,
});
