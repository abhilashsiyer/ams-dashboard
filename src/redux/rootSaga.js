import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import resultsSagas from './Results/results.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(resultsSagas)] )
}