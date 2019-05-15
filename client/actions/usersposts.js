export const GET_POSTSBYUSER = "GET_POSTSBYUSER";
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

export function fetchPostsByUser(userName) {
  return function(dispatch) {
    getPostsByUser(userName).then(post => {
      dispatch(showPostsByUser(post));
    });
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
      dispatch(fetchPostsByUser(userName));
    });
  };
}
