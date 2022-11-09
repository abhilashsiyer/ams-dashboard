import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';


import combineReducers from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddle();

export const middlewares = [thunk, sagaMiddleware, logger];


export const store = createStore(combineReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
