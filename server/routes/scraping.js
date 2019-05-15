const $ = require('cheerio')
const rp = require('request-promise')
const db = require("../db/posts")

function scrapePureinfotech () {
    var url = 'https://pureinfotech.com/choose-power-supply-pc/';
    var name = 'Pureinfotech';

    console.log('Scraping ' + name)

    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('.entry-content p', html)

        // console.log(paras[0])

        for (let i = 0; i < paras.length; i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data);
            }
        }

        wikiUrls.push(url,name)

        // console.log(wikiUrls)

        const keyPairs = {title: 'Pureinfotech', description: wikiUrls[0], type: 'article', sourceUrl: 'https://pureinfotech.com/choose-power-supply-pc/'}
        
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

    console.log('Scraping ' + name)

    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('div.content p', html)

        // console.log(paras[0])

        for (let i = 0; i < paras.length;i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data);
            }
        }

        wikiUrls.push(url,name)
        // res.json(wikiUrls)

        console.log(wikiUrls)

        const keyPairs = {title: "Tom's Hardware", description: wikiUrls[4], type: 'article', sourceUrl: 'https://www.tomshardware.com/reviews/monitor-buying-guide,5699.html'}
        
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

    console.log('Scraping ' + name)

    return rp(url)
    .then(html => {
        //Success!

        const wikiUrls = [];
        const paras = $('section.post-content span p span', html);

        //console.log(paras[0])

        for (let i = 0; i < paras.length;i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data);
            }
        }

        wikiUrls.push(url,name)


        const keyPairs = {title: "Extreme Tech", description: wikiUrls[0], type: 'article', sourceUrl: 'https://www.extremetech.com/computing/241872-choose-right-mechanical-keyboard/'}
        
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

    console.log('Scraping ' + name)

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
        
        wikiUrls.push(url,name)


        const keyPairs = {title: "Furenexo", description: wikiUrls[0], type: 'article', sourceUrl: 'https://www.furenexo.com/gaming-headsets/'}
        
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

    console.log('Scraping ' + name)

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
        
        wikiUrls.push(url,name)


        const keyPairs = {title: "PC Gamer", description: wikiUrls[1], type: 'article', sourceUrl: 'https://www.pcgamer.com/au/how-to-choose-the-right-graphics-card-model/'}
        
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

    console.log('Scraping ' + name)

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
        
        wikiUrls.push(url,name)        


        const keyPairs = {title: "LaptopMag", description: wikiUrls[0], type: 'article', sourceUrl: 'https://www.laptopmag.com/articles/how-to-use-windows-10/'}
        
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

    console.log('Scraping ' + name)

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

        wikiUrls.push(url,name)

        const keyPairs = {title: "Windows Central", description: wikiUrls[1], type: "article", sourceUrl: "https://www.windowscentral.com/how-prevent-frying-your-pc-insides-static-electricity/"}

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

    console.log('Scraping ' + name)

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

        wikiUrls.push(url,name)

        const keyPairs = {title: "EasyPCMod", description: wikiUrls[1], type: "article", sourceUrl: "https://www.easypcmod.com/remove-old-cpu-processor-install-new-one-tutorial-336/"}

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

    console.log('Scraping ' + name)

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

        const keyPairs = {title: "PCWorld", description: wikiUrls[6], type: "article", sourceUrl: "https://www.pcworld.com/article/3331854/ces-2019-pc-trends-announcements.html"}

        return db.addPost(keyPairs)
    })
}

function scrapeMuo () {

    var url = 'https://www.makeuseof.com/tag/upgrades-will-improve-pc-performance/';
    var name = 'Make Use Of';

    console.log('Scraping ' + name)

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


        const keyPairs = {title: "Make Use Of", description: wikiUrls[7], type: "article", sourceUrl: "https://www.makeuseof.com/tag/upgrades-will-improve-pc-performance/"}

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