export enum FetchRocketsActionTypes {
  trigger = 'FETCH_ROCKETS_TRIGGER',
  failure = 'FETCH_ROCKETS_FAILURE',
  success = 'FETCH_ROCKETS_SUCCESS'
}

export interface FetchRocketsSuccessAction {
  type: typeof FetchRocketsActionTypes['success']
  payload: any[]
}
