
exports.up = function(knex, Promise) {
    return knex.schema.createTable('resources', table => {
      table.increments('id').primary()
      table.string('title')
      table.string('description')
      table.string('category')
      table.string('source_url')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('resources')
  };
  