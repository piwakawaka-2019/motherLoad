import {SAVE_DATA} from "../actions/add"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
    return state
    default:
      return state
  }
}

export default reducer