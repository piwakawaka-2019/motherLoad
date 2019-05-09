const connection = require("./connection");

function getCategory (db = connection){
    return db('category')
    .select()
};

module.exports = {
    getCategory,
};

