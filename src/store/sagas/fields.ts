import { call, takeLatest, put, all } from 'redux-saga/effects'
import gql from 'graphql-tag'

import { FetchFieldsActionTypes, FetchRocketsActionTypes } from '../actions'
import { spacexClient } from 'apis'

function* fetchFields() {
  interface Data {
    __type: {
      __typename: string
      fields: {
        name: string
        type: {
          kind: string
        }
        __typename: string
      }[]
    }
  }
  try {
    const { data }: { data: Data | null } = yield call(
      [spacexClient, spacexClient.query],
      {
        query: gql`
          query {
            __type(name: "Rocket") {
              fields {
                name
                type {
                  kind
                }
              }
            }
          }
        `
      }
    )

    if (!data) throw Error('Missing data')

    const payload = data.__type.fields.reduce(
      (acc, cur) => ({
        ...acc,
        ...(cur.type.kind === 'SCALAR' && { [cur.name]: false })
      }),
      {} as { [field: string]: boolean }
    )

    yield all([
      put({ type: FetchFieldsActionTypes.success, payload: payload }),
      put({ type: FetchRocketsActionTypes.trigger, payload: [] })
    ])
  } catch {
    yield put({ type: FetchFieldsActionTypes.failure })
  }
}

function* fieldsSaga() {
  yield takeLatest(FetchFieldsActionTypes.trigger, fetchFields)
}

export default fieldsSaga
