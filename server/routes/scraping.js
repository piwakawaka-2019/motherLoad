const $ = require('cheerio')
const rp = require('request-promise')
const db = require("../db/posts")

function scrapePureinfotech () {

    var url = 'https://pureinfotech.com/choose-power-supply-pc/';
    var name = 'Pureinfotech';

    rp(url)
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

        const keyPairs = {title: 'Pureinfotech', description: wikiUrls[0], type: 'article', sourceUrl: 'https://pureinfotech.com/choose-power-supply-pc/'}
        
        db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error 
        console.log(err);
    });

};



function scrapeTomshardware () {

    var url = 'https://www.tomshardware.com/reviews/monitor-buying-guide,5699.html';
    var name = "Tom's HARDWARE"

    rp(url)
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

        const keyPairs = {title: "Tom's Hardware", description: wikiUrls[0], type: 'article', source_url: 'https://www.tomshardware.com/reviews/monitor-buying-guide,5699.html'}
        
        db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err);
    });

};



function scrapeExtremetech () {

    var url = 'https://www.extremetech.com/computing/241872-choose-right-mechanical-keyboard/';
    var name = 'Extreme Tech'

    rp(url)
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


        const keyPairs = {title: "Extreme Tech", description: wikiUrls[0], type: 'article', source_url: 'https://www.extremetech.com/computing/241872-choose-right-mechanical-keyboard/'}
        
        db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err)
    });

};



function scrapeFurenexo () {

    var url ='https://www.furenexo.com/gaming-headsets/';
    var name = 'Furenexo'

    rp(url)
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


        const keyPairs = {title: "Furenexo", description: wikiUrls[0], type: 'article', source_url: 'https://www.furenexo.com/gaming-headsets/'}
        
        db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err);
    });

};



function scrapePcgamer () {

    var url = 'https://www.pcgamer.com/au/how-to-choose-the-right-graphics-card-model/';
    var name = 'PC Gamer'

    rp(url)
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


        const keyPairs = {title: "PC Gamer", description: wikiUrls[0], type: 'article', source_url: 'https://www.pcgamer.com/au/how-to-choose-the-right-graphics-card-model/'}
        
        db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err)
    });


};



function scrapeLaptop () {

    var url = 'https://www.laptopmag.com/articles/how-to-use-windows-10/';
    var name = 'LaptopMag'

    rp(url)
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


        const keyPairs = {title: "LaptopMag", description: wikiUrls[0], type: 'article', source_url: 'https://www.laptopmag.com/articles/how-to-use-windows-10/'}
        
        db.addPost(keyPairs)
    })

    .catch(err => {
        //handle error
        console.log(err);
    });

};

module.exports = {
    scrapeExtremetech,
    scrapeFurenexo,
    scrapeLaptop,
    scrapePcgamer,
    scrapePureinfotech,
    scrapeTomshardware
}