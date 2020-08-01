import { combineReducers } from 'redux'

import fieldsReducer from './fields'
import rocketsReducer from './rockets'

const rootReducer = combineReducers({
  fields: fieldsReducer,
  rockets: rocketsReducer
})

export default rootReducer
