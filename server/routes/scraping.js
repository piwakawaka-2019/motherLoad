const router = require('express').Router()
const $ = require('cheerio')
const rp = require('request-promise')

router.get('/pureinfotech', (req,res) => {

    var url = 'https://pureinfotech.com/choose-power-supply-pc/';

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
        res.json(wikiUrls)
    })

    .catch(err => {
        //handle error 
        console.log(err);
    });

});



router.get('/tomshardware', (req,res) => {

    var url = 'https://www.tomshardware.com/reviews/monitor-buying-guide,5699.html';

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

        res.json(wikiUrls)
    })

    .catch(err => {
        //handle error
        console.log(err);
    });

});



router.get('/extremetech', (req,res) => {

    var url = 'https://www.extremetech.com/computing/241872-choose-right-mechanical-keyboard/';

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

        res.json(wikiUrls)
    })

    .catch(err => {
        //handle error
        console.log(err)
    });

});



router.get('/furenexo', (req,res) => {

    var url ='https://www.furenexo.com/gaming-headsets/';

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

        res.json(wikiUrls)
    })

    .catch(err => {
        //handle error
        console.log(err);
    });

})



router.get('/pcgamer', (req,res) => {

    var url = 'https://www.pcgamer.com/au/how-to-choose-the-right-graphics-card-model/';

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
        
        res.json(wikiUrls)
    })

    .catch(err => {
        //handle error
        console.log(err)
    });


});



router.get('/laptopmag', (req,res) => {

    var url = 'https://www.laptopmag.com/articles/how-to-use-windows-10/';

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
        
        res.json(wikiUrls)
    })

    .catch(err => {
        //handle error
        console.log(err);
    });

});