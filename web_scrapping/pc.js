const rp = require('request-promise');
const $ = require('cheerio')
// const urlLoad = require('./tech')
// const urlLoadPure = require('./pure')
const url = 'https://www.pcgamer.com/au/how-to-choose-the-right-graphics-card-model/';

rp(url)
  .then(function(html){
    //success!

    // console.log(html)

    // const paras = $('#article-body p', html)
    // console.log(paras)



    const wikiUrls = [];
    const paras = $('#article-body p', html)
    for (let i = 0; i < paras.length; i++) {
      // console.log(paras[i])
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


// console.log(indexLoad())

// console.log(urlLoadPure)
