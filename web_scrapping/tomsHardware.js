const rp = require("request-promise");
const $ = require("cheerio");
const url =
  "https://www.tomshardware.com/reviews/monitor-buying-guide,5699.html";

rp(url)
  .then(html => {
    //Success!

    const wikiUrls = [];
    const paras = $("div.content p", html);
    for (let i = 0; i < paras.length; i++) {
      if (paras[i].children.length > 0) {
        wikiUrls.push(paras[i].children[0].data);
      }
    }

    console.log(wikiUrls);
  })

  .catch(err => {
    //handle error
    console.log(err);
  });
