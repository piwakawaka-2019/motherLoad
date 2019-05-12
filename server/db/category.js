const connection = require("./connection");

function getCategory (db = connection){
    return db('category')
    .select()
};

function getPostsByCategory (categoryId, db = connection){
    return db('categorise_posts')
    // .join("categorise_posts" , "categorise_posts.posts_id", "posts.id")
    // .join("category" , "categorise_posts.category_id", "category.id")
    // .whereIn("categorise_posts.category_id", categoryId)
    .where("category_id", categoryId)

}

function getPostDetailByID(id){
    //return posts table
    //where id matches id
}

// console.log('yus!')
// getPostsByCategory(1).then((console.log)


module.exports = {
    getCategory,
    getPostsByCategory
};

