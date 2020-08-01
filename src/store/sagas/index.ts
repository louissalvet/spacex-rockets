import { all } from 'redux-saga/effects'

import fieldsSaga from './fields'
import rocketsSaga from './rockets'

function* rootSaga() {
  yield all([fieldsSaga(), rocketsSaga()])
}

export default rootSaga
