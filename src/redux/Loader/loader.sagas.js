import loaderTypes from './loader.types';
import { setLoadingState } from './loader.actions';
import { takeLatest, put, all, call } from 'redux-saga/effects';

export function* fetchLoadingState({payload}) {
  try {
    console.log('fetchLoadingState', payload)
    const results = payload;
    console.log('resulsHere', results)
    yield put(
      setLoadingState(results)
    );

  } catch (err) {
    // console.log(err);
  }
}

  
  export function* onShowLoadingStart() {
    yield takeLatest(loaderTypes.SHOW_LOADER, fetchLoadingState);
  }

  export default function* LoaderSagas() {
    yield all([
      call(onShowLoadingStart),
    ])
  }

