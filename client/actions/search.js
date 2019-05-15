export const GET_SEARCH = "GET_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH"
import { getDataByCategory } from "../apis/resources";

export function saveSearch(search) {
  return {
    type: GET_SEARCH,
    search
  };
}

export function fetchSearch(arr, location) {
  return function(dispatch) {
    getDataByCategory(arr, location).then(search => {
      dispatch(saveSearch(search));
    });
  };
}
