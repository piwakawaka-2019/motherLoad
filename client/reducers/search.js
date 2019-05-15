import { GET_SEARCH, CLEAR_SEARCH } from "../actions/search";


const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return action.search;
    case CLEAR_SEARCH:
      return state = {}
    default:
      return state;
  }
};

export default reducer;
