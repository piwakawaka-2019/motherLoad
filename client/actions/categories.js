export const GET_CATEGORY = "GET_CATEGORY";
import { getCatagories } from "../apis/resources";

export function saveCategories(categories) {
  return {
    type: GET_CATEGORY,
    categories
  };
}

export function fetchCategories() {
  return function(dispatch) {
    getCatagories().then(categories => {
      dispatch(saveCategories(categories));
    });
  };
}
