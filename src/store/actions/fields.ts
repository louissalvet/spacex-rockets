export enum FetchFieldsActionTypes {
  trigger = 'FETCH_FIELDS_TRIGGER',
  failure = 'FETCH_FIELDS_FAILURE',
  success = 'FETCH_FIELDS_SUCCESS'
}

export interface FetchFieldsSuccessAction {
  type: typeof FetchFieldsActionTypes['success']
  payload: { [key: string]: boolean }
}

export const toggleActiveFieldActionType = 'TOGGLE_ACTIVE_FIELD'

export interface ToggleActiveFieldAction {
  type: typeof toggleActiveFieldActionType
  payload: string
}
