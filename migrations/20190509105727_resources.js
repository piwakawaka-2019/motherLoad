exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", table => {
    table.increments("id").primary();
    table.string("title", 5000);
    table.string("description", 5000);
    table.string("type");
    table.string("source_url", 5000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};
