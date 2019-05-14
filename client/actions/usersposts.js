export const GET_POSTSBYUSER = "GET_POSTSBYUSER"
import { getPostsByUser } from "../apis/resources";
export function showPostsByUser(post){
  return {
      type: GET_POSTSBYUSER,
      post
  }
}

export function fetchPostsByUser(user){
  return function(dispatch){
    getPostsByUser(user)
      .then(post => {
          dispatch(showPostsByUser(post))
      })
  }
}

export function savePostToUser(user, post){
  return function (dispatch){
    
  }
}