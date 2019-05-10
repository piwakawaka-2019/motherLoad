exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          title: 'Compromise',
          description: 'You do not need the most expensive pieces to start off start of with a good base and work your way up',
          type: 'tip',
          source_url: ""
        },
        {
          id: 2,
          title: 'Take What You Need Not What You Want.',
          description: 'Don’t get a very large power supply just because you can unless you’re going to use the capacity of it.',
          type:'tip',
          source_url: "https://www.extremepc.co.nz/index.php?route=product/category&path=3_36"
        },
        {
          id: 3,
          title: 'Hey',
          description: 'This is a test tutorial',
          type:'tutorial',
          source_url: "https://www.google.co.nz/"
        },
        {
          id: 4,
          title: 'How to Use Windows 10',
          description: "Windows 10 is the most powerful operating system that Microsoft has ever made, but it's also the most complex.",
          type:'tutorial',
          source_url: "https://www.laptopmag.com/articles/how-to-use-windows-10"
        },
        {
          id: 5,
          title: 'How to choose the right graphics card model',
          description: 'A guide to the differences you’ll encounter when trying to select the perfect graphics card for your PC',
          type:'tip',
          source_url: "https://www.pcgamer.com/au/how-to-choose-the-right-graphics-card-model/"
        },
        {
          id: 6,
          title: 'How to Choose the Best Mechanical Keyboard in 2019',
          description: 'Don’t know which power supply to buy? In this guide, we’ll go through everything you need to know to pick the best unit for your PC',
          type:'tip',
          source_url: "https://pureinfotech.com/choose-power-supply-pc/"
        },
        {
          id: 7,
          title: '8 Tips on How to choose the best gaming headset?',
          description: 'Wondering how to choose the best gaming headsets? With the different gaming headsets available out there, selecting among those can give you a hard time.',
          type:'tip',
          source_url: "https://www.furenexo.com/gaming-headsets/"
        },
        {
          id: 8,
          title: 'New Ghost Recon Game Breakpoint Announced For PS4 / Xbox One / PC',
          description: 'Breakpoint is coming October 4',
          type:'article',
          source_url: "https://www.gamespot.com/articles/new-ghost-recon-game-breakpoint-announced-for-ps4-/1100-6466734/"
        },
        {
          id: 9,
          title: 'AMD Ryzen 3000-Series 16-Core CPU Specifications Leaked',
          description: "TUM_APISAK, a very well respected leaker in the hardware scene, has tweeted the alleged specifications for AMD's upcoming Ryzen 3000-series 16-core processor, which is based on the Zen 2 processor microarchitecture and 7nm process node.",
          type:'article',
          source_url: "https://www.tomshardware.com/news/amd-ryzen-3000-series-16-core-cpu-specs,39304.html"
        },
      ])
    })
}
