import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import resultsSagas from './Results/results.sagas';
import matricesSagas from './Matrices/matrices.sagas';
import projectsSagas from './Projects/projects.sagas';
import loaderSagas from './Loader/loader.sagas';
import appsSagas from './Apps/apps.sagas'

export default function* rootSaga() {
  yield all([call(userSagas), call(resultsSagas), call(matricesSagas), call(projectsSagas), call(loaderSagas), 
    call(appsSagas)] )
}