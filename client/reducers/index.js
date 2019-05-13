import {combineReducers} from 'redux'

import auth from './auth'
import tips from './tips'
import tutorials from "./tutorials"
import search from './search'
import categories from './categories'
import add from './add'

export default combineReducers({
  auth,
  tips,
  tutorials,
  search,
  categories,
  add
})
