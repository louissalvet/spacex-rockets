import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from 'store'
import {
  FetchFieldsActionTypes,
  toggleActiveFieldActionType
} from 'store/actions'

const useFields = () => {
  const dispatch = useDispatch()
  const { fields } = useSelector((state: AppState) => state)

  const fetchFields = useCallback(
    () => dispatch({ type: FetchFieldsActionTypes.trigger }),
    [dispatch]
  )

  const toggleField = (field: string) =>
    dispatch({ type: toggleActiveFieldActionType, payload: field })

  return { fields, fetchFields, toggleField }
}

export default useFields
