exports.up = function(knex, Promise) {
  return knex.schema.createTable("categorise_posts", table => {
    table.increments("id").primary();
    table.integer("category_id");
    table.integer("posts_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("categorise_posts");
};
