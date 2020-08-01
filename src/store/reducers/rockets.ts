import { Reducer, combineReducers } from 'redux'

import { FetchRocketsActionTypes, FetchRocketsSuccessAction } from '../actions'
import { createRequestReducer } from '../utils'

type Data =
  | {
      id: string
      __typename: string
      [field: string]: Exclude<any, {} | []>
    }[]
  | null

const initialDataState: Data = null

type Action = FetchRocketsSuccessAction

const dataReducer: Reducer<Data, Action> = (
  state = initialDataState,
  action
) => {
  switch (action.type) {
    case FetchRocketsActionTypes.success:
      return [...action.payload]

    default:
      return state
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
