const rp = require('request-promise')
const $ = require('cheerio')
const url = 'https://www.tomshardware.com/reviews/monitor-buying-guide,5699.html'

rp(url)
    .then(function(html) {
        //Success!

        // console.log(html)

        // const paras = $('div.content p', html)
        // console.log(paras[0].children[0].data)

        const wikiUrls = [];
        const paras = $('div.content p', html)
        for (let i = 0; i < paras.length; i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data);                
            }
        }

        console.log(wikiUrls)

        // console.log($('p > span', html).length);
        // console.log($('p > span', html));

        // return Promise.all(
        //   wikiUrls.map (function(url) {
        //     return potusParse('https://www.extremetech.com' + url);
        //   })
        // );

        // console.log(html)

  })

  .catch(function(err){
    //handle error
    console.log(err);
});