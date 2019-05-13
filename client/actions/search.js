export const GET_SEARCH = "GET_SEARCH"
import { getDataByCategory } from "../apis/resources";
export function saveSearch(search){
  return {
      type: GET_SEARCH,
      search
  }
}

export function fetchSearch(arr){
  return function(dispatch){
    getDataByCategory(arr)
      .then(search => {
          dispatch(saveSearch(search))
      })
  }
}