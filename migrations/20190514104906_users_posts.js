exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_posts", table => {
    table.increments("id").primary();
    table.integer("users_id");
    table.integer("posts_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users_posts");
};
