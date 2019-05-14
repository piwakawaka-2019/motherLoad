const rp = require("request-promise");
const $ = require("cheerio");
const url =
  "https://www.pcgamer.com/au/how-to-choose-the-right-graphics-card-model/";

rp(url)
  .then(function(html) {
    //success!

    const wikiUrls = [];
    const paras = $("#article-body p", html);
    for (let i = 0; i < paras.length; i++) {
      if (paras[i].children.length > 0) {
        wikiUrls.push(paras[i].children[0].data);
      }
    }

    console.log(wikiUrls);
  })

  .catch(function(err) {
    //handle error
    console.log(err);
  });
