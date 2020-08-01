import { call, put, takeLatest, take, select } from 'redux-saga/effects'
import gql from 'graphql-tag'

import {
  FetchRocketsActionTypes,
  toggleActiveFieldActionType
} from '../actions'
import { spacexClient } from 'apis'
import { AppState } from 'store'

interface GraphQLRocketsQueryResponse {
  rockets: {
    [field: string]: Exclude<any, {} | []>
  }[]
}
function* fetchRockets() {
  const selector = (state: AppState) =>
    Object.entries(state.fields.data).reduce(
      (acc, [field, value]) => [...acc, ...(value ? [field] : [])],
      [] as string[]
    )

  const fields: string[] = yield select(selector)

  try {
    const { data }: { data: GraphQLRocketsQueryResponse | null } = yield call(
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

    const rockets =
      data?.rockets?.map?.(({ __typename, ...rocket }) => rocket) || null

    yield put({
      type: FetchRocketsActionTypes.success,
      payload: rockets
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
