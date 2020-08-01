import { Reducer, combineReducers } from 'redux'

import {
  FetchFieldsActionTypes,
  FetchFieldsSuccessAction,
  toggleActiveFieldActionType,
  ToggleActiveFieldAction
} from '../actions'
import { createRequestReducer } from '../utils'

type Data = { [key: string]: boolean }

const initialDataState: Data = {}

type Action = FetchFieldsSuccessAction | ToggleActiveFieldAction

const dataReducer: Reducer<Data, Action> = (
  state = initialDataState,
  action
) => {
  switch (action.type) {
    case FetchFieldsActionTypes.success:
      const { id, ...fields } = action.payload
      return { ...state, ...fields }

    case toggleActiveFieldActionType:
      const field = action.payload
      const newField = { [field]: !state[field] }
      return { ...state, ...newField }

    default:
      return { ...state }
  }
}

const requestsReducer = combineReducers({
  fetchFields: createRequestReducer(FetchFieldsActionTypes)
})

const fieldsReducer = combineReducers({
  data: dataReducer,
  requests: requestsReducer
})

export default fieldsReducer
