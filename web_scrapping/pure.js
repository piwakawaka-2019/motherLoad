const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://pureinfotech.com/choose-power-supply-pc/";

rp(url)
  .then(html => {
    //success!

    const wikiUrls = [];
    const paras = $(".entry-content p", html);
    console.log(paras[0]);
    for (let i = 0; i < paras.length; i++) {
      wikiUrls.push(paras[i].children[0].data);
    }

    // console.log(wikiUrls[0])
  })

  .catch(err => {
    //handle error
    console.log(err);
  });
