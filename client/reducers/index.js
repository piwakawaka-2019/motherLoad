import {combineReducers} from 'redux'

import auth from './auth'
import tips from './tips'
import tutorials from "./tutorials"
import search from './search'
import categories from './categories'

export default combineReducers({
  auth,
  tips,
  tutorials,
  search,
  categories
})
