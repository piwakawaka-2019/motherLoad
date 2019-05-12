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

module.exports = {
    getPosts,
    getTips,
    getTutorials,
};

