const rp = require("request-promise");
const $ = require("cheerio");
const url =
  "https://www.extremetech.com/computing/241872-choose-right-mechanical-keyboard";

rp(url)
  .then(html => {
    const wikiUrls = [];
    const paras = $("section.post-content span p span", html);

    for (let i = 0; i < paras.length; i++) {
      wikiUrls.push(paras[i].children[0].data);
    }

    console.log(wikiUrls);
  })
  .catch(err => {
    //handle error
    console.log(err);
  });
