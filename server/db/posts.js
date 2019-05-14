const connection = require("./connection");
const { getUserByUsername } = require('./users')

function getPosts (db = connection){
    return db('posts')
    .select()
};

function getTips (db = connection){
    return db("posts")
    .where("type" , "tip")
};

function getTutorials (db = connection){
    return db("posts")
    .where("type" , "tutorial")
};

function addPost(postObj, db = connection){
    return db("posts")
    .insert({title: postObj.title, description: postObj.description, type: postObj.type, source_url: postObj.sourceUrl})
    .then(ids =>{
        const postId = ids[0]
        return Promise.all(postObj.categories.map(category_id => {
           return db("categorise_posts")
            .insert({posts_id: postId, category_id: category_id})
        }))
    })
}
function getPostsByUser (name, db = connection ){
    return db('posts')
    .join("users_posts" , "users_posts.posts_id", "posts.id")
    .join("users" , "users_posts.users_id", "users.id")
    .where("users.user_name", name)
}

function savePostToUser (post, db = connection){
    getUserByUsername(post.name)
    .then(user=>{
        return db('users_posts')
        .insert({users_id: user.id, posts_id: post.id})
    })
}

// getPostsByUser('eyeball').then((console.log))
module.exports = {
    getPosts,
    getTips,
    getTutorials,
    addPost,
    getPostsByUser,
    savePostToUser
}
