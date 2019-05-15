exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", table => {
    table.increments("id").primary();
    table.string("title");
    table.string("description");
    table.string("type");
    table.string("source_url");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};
