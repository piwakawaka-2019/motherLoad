import { GET_POSTSBYUSER } from "../actions/usersposts";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTSBYUSER:
      return action.post;
    default:
      return state;
  }
};

export default reducer;
