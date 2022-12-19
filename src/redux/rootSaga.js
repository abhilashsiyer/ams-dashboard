import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import resultsSagas from './Results/results.sagas';
import matricesSagas from './Matrices/matrices.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(resultsSagas), call(matricesSagas)] )
}