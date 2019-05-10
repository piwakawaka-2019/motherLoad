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
        {id: 3,
        category_id : 11,
        posts_id: 3},
        {id: 4,
        category_id : 11,
        posts_id: 4},
        {id: 5,
        category_id : 7,
        posts_id: 5},
        {id: 6,
        category_id : 10,
        posts_id: 6},
        {id: 7,
        category_id : 10,
        posts_id: 7},
      ]);
    });
};