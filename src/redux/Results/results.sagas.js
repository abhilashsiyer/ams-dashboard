import resultsTypes from './results.types';
import { handleFetchResults, handleFetchResult } from './results.helpers';
import { setResult, setResults } from './results.actions';
import { takeLatest, put, all, call } from 'redux-saga/effects';


export function* fetchResults({ payload }) {
    try {
      const results = yield handleFetchResults(payload);
      yield put(
        setResults(results)
      );
  
    } catch (err) {
      // console.log(err);
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
  
    } catch (err) {
      // console.log(err);
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

