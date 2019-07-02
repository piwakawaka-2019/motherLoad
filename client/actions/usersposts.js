export const GET_POSTSBYUSER = "GET_POSTSBYUSER";
export const DEL_POSTSBYUSER = "DEL_POSTSBYUSER"
import {
  getPostsByUser,
  addPostsByUser,
  deletePostFromUser
} from "../apis/resources";

export function showPostsByUser(post) {
  return {
    type: GET_POSTSBYUSER,
    post
  };
}
export function deletePost(){
  return {
    type: DEL_POSTSBYUSER,
  };
}
export function deletePostFromUserInRedux(userName){
  return function(dispatch) {
    getPostsByUser(userName).then(post => {
      dispatch(showPostsByUser(post));
    });
  };
}
export function fetchPostsByUser(userName) {
  return function(dispatch) {
    getPostsByUser(userName).then(post => {
      dispatch(showPostsByUser(post));
    })
  };
}

export function savePostToUser(userName, post) {
  return function(dispatch) {
    addPostsByUser(userName, post).then(() => {
      dispatch(fetchPostsByUser(userName));
    });
  };
}
export function deletePostSavedToUser(userName, post) {
  return function(dispatch) {
    deletePostFromUser(userName, post).then(() => {
      dispatch(deletePostFromUserInRedux(userName));
    });
  };
}
