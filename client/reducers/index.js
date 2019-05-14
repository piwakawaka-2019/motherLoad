import {combineReducers} from 'redux'

import auth from './auth'
import tips from './tips'
import tutorials from "./tutorials"
import articles from "./articles"

export default combineReducers({
  auth,
  tips,
  tutorials,
  articles
})
