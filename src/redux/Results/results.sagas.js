import resultsTypes from './results.types';
import { handleFetchResults, handleFetchResult } from './results.helpers';
import { setResult, setResults } from './results.actions';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { changeLoadingStateStart } from './../Loader/loader.actions';


export function* fetchResults({ payload }) {
    try {
      const results = yield handleFetchResults(payload);
      yield put(
        setResults(results)
      );

      yield put(
        changeLoadingStateStart(false)
      );
  
    } catch (err) {
      yield put(
        changeLoadingStateStart(false)
      );
    }
  }
  
  export function* onFetchResultsStart() {
    yield takeLatest(resultsTypes.FETCH_RESULTS_START, fetchResults);
  }

  export function* fetchResult({ payload }) {
    try {
      const result = yield handleFetchResult(payload);      
      yield put(
        setResult(result)
      );
      
      yield put(
        changeLoadingStateStart(false)
      );
  
    } catch (err) {
      yield put(
        changeLoadingStateStart(false)
      );
    }
  }
  
  export function* onFetchResultStart() {
    yield takeLatest(resultsTypes.FETCH_RESULT_START, fetchResult);
  }  

  export default function* ResultsSagas() {
    yield all([
      call(onFetchResultsStart),
      call(onFetchResultStart),
    ])
  }

