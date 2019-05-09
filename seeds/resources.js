exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          title: 'Compromise',
          description: 'You do not need the most expensive pieces to start off start of with a good base and work your way up',
          category: 'General Knowledge',
          source_url: "",
        }
      ])
    })
}
