const connection = require("./connection");
const { getUserByUsername } = require("./users");

function getPosts(db = connection) {
  return db("posts").select();
}

function getTips(db = connection) {
  return db("posts").where("type", "tip");
}

function getTutorials(db = connection) {
  return db("posts").where("type", "tutorial");
}

function addPostWithCategory(postObj, db = connection) {
  return db("posts")
    .insert({
      title: postObj.title,
      description: postObj.description,
      type: postObj.type,
      source_url: postObj.sourceUrl
    })
    .then(ids => {
      const postId = ids[0];
      return Promise.all(
        postObj.categories.map(category_id => {
          return db("categorise_posts").insert({
            posts_id: postId,
            category_id: category_id
          });
        })
      );
    });
}

function addPost(postObj, db = connection) {
  return db("posts").insert({
    title: postObj.title,
    description: postObj.description,
    type: postObj.type,
    source_url: postObj.sourceUrl
  })
  .then()
}

function getPostsByUser(name, db = connection) {
  return db("posts")
    .join("users_posts", "users_posts.posts_id", "posts.id")
    .join("users", "users_posts.users_id", "users.id")
    .where("users.user_name", name);
}
function getArticles (db = connection){
  return db("posts")
  .where("type" , "article")
};


function savePostToUser(post, db = connection) {
  return getUserByUsername(post.name).then(user => {
    return db("users_posts").insert({ users_id: user.id, posts_id: post.id });
  });
}

function deletePostFromUser(post, db = connection) {
  return getUserByUsername(post.name).then(user => {
    return db("users_posts")
      .where("users_id", user.id)
      .andWhere("posts_id", post.id)
      .del();
  });
}
module.exports = {
    getPosts,
    getTips,
    getTutorials,
    getArticles,
    addPost,
    getPostsByUser,
    savePostToUser,
    deletePostFromUser,
    addPostWithCategory
}
