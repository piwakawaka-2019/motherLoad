const rp = require('request-promise')
const $ = require('cheerio')
const url = 'https://www.furenexo.com/gaming-headsets/'

rp(url)
    .then(function(html) {
        //Success!

        // const paras = $('.itemBody p', html)
        // console.log(paras)

        const wikiUrls = [];
        const paras = $('.itemBody kl-blog-post-body kl-blog-cols-1, p', html)
        // console.log(paras[4])

        for (let i = 0; i < paras.length; i++) {
            if (paras[i].children.length > 0) {
                wikiUrls.push(paras[i].children[0].data);                
            }
        }

        console.log(wikiUrls)

  })

  .catch(function(err){
    //handle error
    console.log(err);
});