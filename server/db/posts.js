const connection = require("./connection");

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
    console.log('db called')
    console.log(postObj)
    return db("posts")
    .insert({title: postObj.title, description: postObj.description, type: postObj.type, source_url: postObj.sourceUrl})
    .then(ids =>{
        const postId = ids[0]
        console.log('this is the ids', ids[0], ids)
        return Promise.all(postObj.categories.map(category_id => {
           return db("categorise_posts")
            .insert({posts_id: postId, category_id: category_id})
        }))
    })
}

module.exports = {
    getPosts,
    getTips,
    getTutorials,
    addPost,
}
