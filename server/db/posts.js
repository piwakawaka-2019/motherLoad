const connection = require("./connection");

function getPosts (db = connection){
    return db('posts')
    .select()
};

function getTips (db = connection) {
    return db("posts")
    .where("type" ,"tips")
    .select()
};

module.exports = {
    getPosts,
    getTips,
};

