import { combineReducers } from 'redux'
import ReducerEntries from './ReducerEntries'

const rootReducer = combineReducers({
  entries: ReducerEntries
})

export default rootReducer
