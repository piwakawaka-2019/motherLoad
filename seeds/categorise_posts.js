exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("categorise_posts")
    .del()
    .then(function() {
      // Inserts seed entries
<<<<<<< HEAD
      return knex("categorise_posts").insert([
        { id: 1, category_id: 11, posts_id: 1 },
        { id: 2, category_id: 1, posts_id: 2 }
||||||| merged common ancestors
      return knex('categorise_posts').insert([
        {id: 1, 
        category_id : 11, 
        posts_id: 1},
        {id: 2, 
        category_id : 1, 
        posts_id: 2},
=======
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
        category_id : 12,
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
        {id: 8,
        category_id : 13,
        posts_id: 8},
        {id: 9,
        category_id : 2,
        posts_id: 9},
        {id: 10,
        category_id : 11,
        posts_id: 10},
        {id: 11,
        category_id : 11,
        posts_id: 11},
        {id: 12,
        category_id : 11,
        posts_id: 12},
        {id: 13,
        category_id : 11,
        posts_id: 13},
        {id: 14,
        category_id : 2,
        posts_id: 14},
        {id: 15,
        category_id : 11,
        posts_id: 15},
>>>>>>> f91b3a633a9b5eea253702f7558bca63d1d653a4
      ]);
    });
};
