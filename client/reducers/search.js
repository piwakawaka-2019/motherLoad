import { GET_SEARCH } from "../actions/search";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return action.search;
    default:
      return state;
  }
};

export default reducer;
