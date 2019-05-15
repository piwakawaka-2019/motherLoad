import { GET_POSTSBYUSER, DEL_POSTSBYUSER } from "../actions/usersposts";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTSBYUSER:
      return action.post;
    case DEL_POSTSBYUSER:
      return Object.assign(state, initialState)
    default:
      return state;
  }
};

export default reducer;
