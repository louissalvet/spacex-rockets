import { Reducer, combineReducers } from 'redux'

import { FetchRocketsActionTypes, FetchRocketsSuccessAction } from '../actions'
import { createRequestReducer } from '../utils'

type Data = any[]

const initialDataState: Data = []

type Action = FetchRocketsSuccessAction

const dataReducer: Reducer<Data, Action> = (
  state = initialDataState,
  action
) => {
  switch (action.type) {
    case FetchRocketsActionTypes.success:
      return [...action.payload]

    default:
      return [...state]
  }
}

const requestsReducer = combineReducers({
  fetchRockets: createRequestReducer(FetchRocketsActionTypes)
})

const fieldsReducer = combineReducers({
  data: dataReducer,
  requests: requestsReducer
})

export default fieldsReducer
