const { scrapeExtremetech, scrapeFurenexo, scrapeLaptop, scrapePcgamer, scrapePureinfotech, scrapeTomshardware, scrapeWindowscentral, scrapeEasypcmod, scrapePcworld, scrapeMuo } = require('../server/routes/scraping')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  console.log('Seeds are running please wait.......')
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          title: "Compromise",
          description:
            "You do not need the most expensive pieces to start off start of with a good base and work your way up",
          type: "tip",
          source_url: ""
        },
        {
          id: 2,
          title: "Take What You Need Not What You Want.",
          description:
            "Don’t get a very large power supply just because you can unless you’re going to use the capacity of it.",
          type: "tip",
          source_url: ""
        },
        {
          id: 3,
          title: '',
          description: '',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/watch?v=7EnRjlsvJ3Y'
        },
        {
          id: 4,
          title: '',
          description: '',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/watch?v=3p_AdODjL_w'
        },
        {
          id: 5,
          title: '',
          description: '',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/watch?v=9yQRmbe2QPU'
        },
        {
          id: 6,
          title: '',
          description: '',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/watch?v=VOd1oN1wPSk&list=PL8mG-RkN2uTw2dKee2utXmdEBhmSbAbc0&index=25'
        },
        {
          id: 7,
          title: '',
          description: '',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/watch?v=YDCMMf-_ASE&list=PL8mG-RkN2uTw2dKee2utXmdEBhmSbAbc0&index=35'
        },
        {
          id: 8,
          title: '',
          description: '',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/watch?v=8OmkmluAYAQ&list=PL8mG-RkN2uTw2dKee2utXmdEBhmSbAbc0&index=37'
        },
      ])
    })
    .then(function () {
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

