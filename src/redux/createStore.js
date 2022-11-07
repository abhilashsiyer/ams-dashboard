import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import combineReducers from './rootReducer';
export const middlewares = [thunk, logger];

export const store = createStore(combineReducers, applyMiddleware(...middlewares));

export default store;
