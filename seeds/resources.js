exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
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
<<<<<<< HEAD
          title: "Take What You Need Not What You Want.",
          description:
            "Don’t get a very large power supply just because you can unless you’re going to use the capacity of it.",
          type: "tip",
          source_url: ""
||||||| merged common ancestors
          title: 'Take What You Need Not What You Want.',
          description: 'Don’t get a very large power supply just because you can unless you’re going to use the capacity of it.',
          type:'tip',
          source_url: ""
=======
          title: 'Take What You Need Not What You Want.',
          description: 'Don’t get a very large power supply just because you can unless you’re going to use the capacity of it.',
          type:'tip',
          source_url: "https://www.extremepc.co.nz/index.php?route=product/category&path=3_36"
>>>>>>> f91b3a633a9b5eea253702f7558bca63d1d653a4
        },
        {
          id: 3,
<<<<<<< HEAD
          title: "Hey",
          description: "This is a test tutorial",
          type: "tutorial",
          source_url: ""
        }
      ]);
    });
};
||||||| merged common ancestors
          title: 'Hey',
          description: 'This is a test tutorial',
          type:'tutorial',
          source_url: ""
        },
      ])
    })
}
=======
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
        {
          id: 10,
          title: 'Building a Gaming PC for the First Time? Don’t Panic, This Guide Can Help You Out',
          description: "Before you build a PC, you’re obviously going to need the right parts. That’s why we’re here.",
          type:'tutorial',
          source_url: "https://www.newegg.com/insider/building-a-gaming-pc-for-the-first-time-dont-panic-this-guide-can-help-you-out/"
        },
        {
          id: 11,
          title: 'These Upgrades Will Improve Your PC Performance the Most!',
          description: "Is your PC fast enough for the things you want to do? Does it take forever to boot, or grind to a halt when you try to use Photoshop? If so, it’s probably time to upgrade your hardware.",
          type:'tutorial',
          source_url: "https://www.makeuseof.com/tag/upgrades-will-improve-pc-performance/"
        },
        {
          id: 12,
          title: 'How to prevent frying your PC insides with static electricity',
          description: "IT'S ELECTRIFYING!",
          type:'tutorial',
          source_url: "https://www.windowscentral.com/how-prevent-frying-your-pc-insides-static-electricity"
        },
        {
          id: 13,
          title: 'How to clean your computer',
          description: "Follow our tips to keep your PC dust-free.",
          type:'tutorial',
          source_url: "https://www.pcgamer.com/au/how-to-clean-your-computer-case/"
        },
        {
          id: 14,
          title: 'How to remove old CPU or processor and install a new one',
          description: "If you noticed that the old processor in your system appears to be not up to the job lately, replacing it may be a wise option.",
          type:'tutorial',
          source_url: "https://www.easypcmod.com/remove-old-cpu-processor-install-new-one-tutorial-336"
        },
        {
          id: 15,
          title: '6 important CES 2019 reveals and trends that PC enthusiasts need to know about',
          description: "The PC showed up strong at CES 2019.",
          type:'article',
          source_url: "https://www.pcworld.com/article/3331854/ces-2019-pc-trends-announcements.html"
        },
      ])
    })
}
>>>>>>> f91b3a633a9b5eea253702f7558bca63d1d653a4
