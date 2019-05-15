const { scrapeExtremetech, scrapeFurenexo, scrapeLaptop, scrapePcgamer, scrapePureinfotech, scrapeTomshardware, scrapeWindowscentral, scrapeEasypcmod, scrapePcworld, scrapeMuo } = require('../server/routes/scraping')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        // Placeholder seed entry.
        // {
        //   id: 0,
        //   title: '',
        //   description: "",
        //   type:'',
        //   source_url: ""
        // },
        {
          id: 1,
          title: 'Compromise',
          description: 'You do not need the most expensive pieces to start off with a good base and work your way up',
          type: 'tip',
          source_url: ""
        },
        {
          id: 2,
          title: 'Take What You Need Not What You Want.',
          description: 'Don’t get a very large power supply just because you can unless you’re going to use the capacity of it.',
          type:'tip',
          source_url: ""
        },
      ])
    })
    .then(function () {
      console.log('hi')
      return Promise.all([
        scrapeExtremetech(),
        scrapeFurenexo(),
        scrapeLaptop(),
        scrapePcgamer(),
        scrapePureinfotech(),
        scrapeTomshardware(),
        scrapeWindowscentral(),
        scrapeEasypcmod(),
        scrapePcworld(),
        scrapeMuo()
    ])
  })
}

