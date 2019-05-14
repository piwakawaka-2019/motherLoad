import { GET_CATEGORY } from "../actions/categories";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return action.categories;
    default:
      return state;
  }
};

export default reducer;
