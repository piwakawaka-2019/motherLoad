
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categorise_posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('categorise_posts').insert([
        {id: 1, 
        category_id : 11, 
        posts_id: 1},
        {id: 2, 
        category_id : 1, 
        posts_id: 2},
      ]);
    });
};
