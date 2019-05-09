
exports.up = function(knex, Promise) {
    return knex.schema.createTable('categorise_posts', table => {
      table.increments('id').primary()
      table.integer('category_id').references('category.id')
      table.integer('resources_id').references('resources.id')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categorise_posts')
  };