const rp = require('request-promise')
const $ = require('cheerio')
const url = 'https://pureinfotech.com/choose-power-supply-pc/';

rp(url)
  .then(function(html){
    //success!

    // console.log(html)

    // const paras = $('.entry-content p', html)
    // console.log(paras[5].children[0].data)



    const wikiUrls = [];
    const paras = $('.entry-content p', html)
    console.log(paras[0])
    for (let i = 0; i < paras.length; i++) {
      wikiUrls.push(paras[i].children[0].data);
    }

    // console.log(wikiUrls[0])

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


// const urlLoadPure = () => {
//     console.log(wikiUrls[0])
// }

