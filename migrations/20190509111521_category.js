exports.up = function(knex, Promise) {
    return knex.schema.createTable('category', table => {
      table.increments('id')
      table.string('General Knowledge')
      table.string('Peripherals')
      table.string('Power Supply')
      table.string('CPU')
      table.string('CPU Cooler')
      table.string('Motherboard')
      table.string('Memory (RAM)')
      table.string('Storage')
      table.string('Graphics Card')
      table.string('Case')
      table.string('Optical Drive')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('category')
  };
  