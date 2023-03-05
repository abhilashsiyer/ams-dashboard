import matricesTypes from './matrices.types';
import { handleFetchMatrices } from './matrices.helpers';
import { setMatrices } from './matrices.actions';
import { takeLatest, put, all, call } from 'redux-saga/effects';


export function* fetchMatrices({payload}) {
    try {
      const results = yield handleFetchMatrices(payload);
      yield put(
        setMatrices(results)
      );
  
    } catch (err) {
      // console.log(err);
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

