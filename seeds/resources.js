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
          title: 'Are Budget builds ACTUALLY worth it?',
          description: 'Budget gaming PCs are super popular, but are you actually causing yourself more harm than good when you shop for as cheap as possible?',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed/7EnRjlsvJ3Y'
        },
        {
          id: 4,
          title: 'How to pick the RIGHT video card!',
          description: 'Trying to find the right GPU can be frustrating... so here are some things to think about when shopping for your next video card!',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed/3p_AdODjL_w'
        },
        {
          id: 5,
          title: 'Intel i9 9900K... is this REALLY worth it??',
          description: 'The Intel 9900K is here! But at what cost??',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed/9yQRmbe2QPU'
        },
        {
          id: 6,
          title: 'The CHEAPEST Heatsink on the Market',
          description: 'How good is a heatsink that costs only $5?',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed?v=VOd1oN1wPSk&list=PL8mG-RkN2uTw2dKee2utXmdEBhmSbAbc0&index=25'
        },
        {
          id: 7,
          title: 'EKWB Predator 240 & 360 Liquid Coolers - Uncompromised performance?',
          description: 'The EKWB Predator series provides a pretty badass entry into the "expandable all-in-one" liquid cooling market. Is it a must have for newbies and tinkerers alike?',
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed?v=YDCMMf-_ASE&list=PL8mG-RkN2uTw2dKee2utXmdEBhmSbAbc0&index=35'
        },
        {
          id: 8,
          title: 'Homemade Water Block Review - My Scrapyard Wars 2 Cooling Solution!',
          description: "Is making your own water block feasible? I decided to test that out using my Scrapyard Wars 2 water block made on my neighbor's CNC machine.",
          type: 'tutorial',
          source_url: 'https://www.youtube.com/embed?v=8OmkmluAYAQ&list=PL8mG-RkN2uTw2dKee2utXmdEBhmSbAbc0&index=37'
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

