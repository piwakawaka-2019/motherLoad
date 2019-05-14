import { GET_LOCATION } from "../actions/location";


const initialState = {location: 'home', url: '/'};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return action.location;
    default:
      return state;
  }
};

export default reducer;
