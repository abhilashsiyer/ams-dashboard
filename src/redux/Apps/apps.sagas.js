import appsTypes from './apps.types';
import { handleFetchApps } from './apps.helpers';
import { setApps } from './apps.actions';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { changeLoadingStateStart } from './../Loader/loader.actions';


export function* fetchApps({payload}) {
    try {
      const results = yield handleFetchApps(payload);
      yield put(
        setApps(results)
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
  
  export function* onFetchAppsStart() {
    yield takeLatest(appsTypes.FETCH_APPS_START, fetchApps);
  } 

  export default function* AppsSagas() {
    yield all([
      call(onFetchAppsStart),
    ])
  }

