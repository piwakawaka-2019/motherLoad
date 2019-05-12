import {combineReducers} from 'redux'

import auth from './auth'
import tips from './tips'
import tutorials from "./tutorials"

export default combineReducers({
  auth,
  tips,
  tutorials
})
