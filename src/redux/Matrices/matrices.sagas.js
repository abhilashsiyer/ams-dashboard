import matricesTypes from './matrices.types';
import { handleFetchMatrices } from './matrices.helpers';
import { setMatrices } from './matrices.actions';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { changeLoadingStateStart } from './../Loader/loader.actions';


export function* fetchMatrices({payload}) {
    try {
      const results = yield handleFetchMatrices(payload);
      yield put(
        setMatrices(results)
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
  
  export function* onFetchMatricesStart() {
    yield takeLatest(matricesTypes.FETCH_MATRICES_START, fetchMatrices);
  } 

  export default function* ResultsSagas() {
    yield all([
      call(onFetchMatricesStart),
    ])
  }

