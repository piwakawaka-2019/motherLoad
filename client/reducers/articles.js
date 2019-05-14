import {SAVE_ARTICLES} from "../actions/receive"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ARTICLES:
    return [...state, ...action.articles]
    default:
      return state
  }
}

export default reducer