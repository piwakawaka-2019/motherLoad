import { GET_TUTORIAL } from "../actions/receive";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TUTORIAL:
      return action.tutorials;
    default:
      return state;
  }
};

export default reducer;
