import {combineReducers} from 'redux'

import auth from './auth'
import tips from './tips'
import tutorials from "./tutorials"
import articles from "./articles"
import search from './search'
import categories from './categories'
import postsbyuser from './userposts'

export default combineReducers({
  auth,
  tips,
  tutorials,
  articles,
  search,
  categories,
  postsbyuser
})
