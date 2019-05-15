import { GET_TIP } from "../actions/receive";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIP:
      return action.tips;
    default:
      return state;
  }
};

export default reducer;
