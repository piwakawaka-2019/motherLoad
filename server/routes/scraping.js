const $ = require('cheerio')
const rp = require('request-promise')
const db = require("../db/posts")

function scrapePureinfotech () {
    var url = 'https://pureinfotech.com/choose-power-supply-pc/';
    var name = 'Pureinfotech';


    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('.entry-content p', html)


        for (let i = 0; i < paras.length; i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data);
            }
        }

        // wikiUrls.shift()
        // console.log(wikiUrls)


        const keyPairs = {title: 'How to choose the right power supply for your PC', description: wikiUrls[0], type: 'article', sourceUrl: 'https://pureinfotech.com/choose-power-supply-pc/'}
        
        return db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error 
        console.log(err);
    });

};



function scrapeTomshardware () {

    var url = 'https://www.tomshardware.com/reviews/monitor-buying-guide,5699.html';
    var name = "Tom's HARDWARE"


    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('div.content p', html)


        for (let i = 0; i < paras.length;i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data);
            }
        }

        // wikiUrls.push(url,name)
        // res.json(wikiUrls)


        const keyPairs = {title: "How to Choose a PC Monitor: A 2019 Guide", description: wikiUrls[4], type: 'article', sourceUrl: 'https://www.tomshardware.com/reviews/monitor-buying-guide,5699.html'}
        
        return db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err);
    });

};



function scrapeExtremetech () {

    var url = 'https://www.extremetech.com/computing/241872-choose-right-mechanical-keyboard/';
    var name = 'Extreme Tech'


    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('section.post-content span p span', html);


        for (let i = 0; i < paras.length;i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data);
            }
        }

        // wikiUrls.push(url,name)


        const keyPairs = {title: "How to Choose the Best Mechanical Keyboard in 2019", description: wikiUrls[0], type: 'article', sourceUrl: 'https://www.extremetech.com/computing/241872-choose-right-mechanical-keyboard/'}
        
        return db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err)
    });

};



function scrapeFurenexo () {

    var url ='https://www.furenexo.com/gaming-headsets/';
    var name = 'Furenexo'


    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('.itemBody kl-blog-post-body kl-blog-cols-1, p', html);

        for (let i = 0; i < paras.length;i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data);
            }
        }
        
        // wikiUrls.push(url,name)


        const keyPairs = {title: "8 Tips on How to choose the best gaming headset?", description: wikiUrls[0], type: 'article', sourceUrl: 'https://www.furenexo.com/gaming-headsets/'}
        
        return db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err);
    });

};



function scrapePcgamer () {

    var url = 'https://www.pcgamer.com/au/how-to-choose-the-right-graphics-card-model/';
    var name = 'PC Gamer'


    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('#article-body p', html)

        for (let i = 0; i < paras.length; i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data);
            }
        }
        
        // wikiUrls.push(url,name)


        const keyPairs = {title: "How to choose the right graphics card model", description: wikiUrls[1], type: 'article', sourceUrl: 'https://www.pcgamer.com/au/how-to-choose-the-right-graphics-card-model/'}
        
        return db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err)
    });


};



function scrapeLaptop () {

    var url = 'https://www.laptopmag.com/articles/how-to-use-windows-10/';
    var name = 'LaptopMag'


    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('tabContent, p', html)

        for (let i = 0; i < paras.length; i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data)
            }
        }
        
        // wikiUrls.push(url,name)        


        const keyPairs = {title: "How to Use Windows 10", description: wikiUrls[0], type: 'article', sourceUrl: 'https://www.laptopmag.com/articles/how-to-use-windows-10/'}
        
        return db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err);
    });

};

function scrapeWindowscentral () {

    var url = 'https://www.windowscentral.com/how-prevent-frying-your-pc-insides-static-electricity/';
    var name = 'Windows Central';


    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('.article-body__section .article-body__section--narrow, p', html)

        for (let i = 0; i < paras.length; i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data)
            }
        }

        // wikiUrls.push(url,name)

        const keyPairs = {title: "How to prevent frying your PC insides with static electricity", description: wikiUrls[1], type: "article", sourceUrl: "https://www.windowscentral.com/how-prevent-frying-your-pc-insides-static-electricity/"}

        return db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err)
    });
};

function scrapeEasypcmod () {

    var url = 'https://www.easypcmod.com/remove-old-cpu-processor-install-new-one-tutorial-336/';
    var name = 'EasyPCMod';


    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('.entry-content, p', html)

        for (let i = 0; i < paras.length; i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data)
            }
        }

        // wikiUrls.push(url,name)

        const keyPairs = {title: "How to remove old CPU or processor and install a new one", description: wikiUrls[1], type: "article", sourceUrl: "https://www.easypcmod.com/remove-old-cpu-processor-install-new-one-tutorial-336/"}

        return db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err)
    });
};

function scrapePcworld () {

    var url = 'https://www.pcworld.com/article/3331854/ces-2019-pc-trends-announcements.html';
    var name = 'PCWorld'


    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('#drr-container, p', html)

        for (let i = 0; i < paras.length; i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data)
            }
        }

        wikiUrls.push(url,name)

        const keyPairs = {title: "6 important CES 2019 reveals and trends that PC enthusiasts need to know about", description: wikiUrls[6], type: "article", sourceUrl: "https://www.pcworld.com/article/3331854/ces-2019-pc-trends-announcements.html"}

        return db.addPost(keyPairs)
    })
}

function scrapeMuo () {

    var url = 'https://www.makeuseof.com/tag/upgrades-will-improve-pc-performance/';
    var name = 'Make Use Of';


    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('.layout-block, .single-post-content, p', html)

        for (let i = 0; i < paras.length; i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data)
            }
        }

        wikiUrls.push(url,name)

 
        const keyPairs = {title: 'These Upgrades will Improve Your PC Performance The Most!', description: wikiUrls[7], type: "article", sourceUrl: "https://www.makeuseof.com/tag/upgrades-will-improve-pc-performance/"}

        return db.addPost(keyPairs)
    })
}

module.exports = {
    scrapeExtremetech,
    scrapeFurenexo,
    scrapeLaptop,
    scrapePcgamer,
    scrapePureinfotech,
    scrapeTomshardware,
    scrapeWindowscentral,
    scrapeEasypcmod,
    scrapePcworld,
    scrapeMuo
}