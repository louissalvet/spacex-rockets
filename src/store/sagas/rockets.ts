import { call, put, takeLatest, take, select } from 'redux-saga/effects'
import gql from 'graphql-tag'

import {
  FetchRocketsActionTypes,
  toggleActiveFieldActionType
} from '../actions'
import { spacexClient } from 'apis'
import { AppState } from 'store'

function* fetchRockets() {
  const selector = (state: AppState) =>
    Object.entries(state.fields.data).reduce(
      (acc, [field, value]) => [...acc, ...(value ? [field] : [])],
      [] as string[]
    )

  const fields = yield select(selector)

  try {
    const { data }: { data: { rockets: {}[] } | null } = yield call(
      [spacexClient, spacexClient.query],
      {
        query: gql`
            query {
              rockets {
                id
                ${fields}
              }
            }
          `
      }
    )

    yield put({
      type: FetchRocketsActionTypes.success,
      payload: data?.rockets || []
    })
  } catch (err) {
    yield put({ type: FetchRocketsActionTypes.failure })
  }
}

function* watchActiveFields() {
  while (true) {
    yield take(toggleActiveFieldActionType)
    yield put({ type: FetchRocketsActionTypes.trigger })
  }
}

function* rocketsSaga() {
  yield takeLatest([FetchRocketsActionTypes.trigger], fetchRockets)
  yield watchActiveFields()
}

export default rocketsSaga
