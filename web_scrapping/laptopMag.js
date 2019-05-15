const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://www.laptopmag.com/articles/how-to-use-windows-10/";

rp(url)
  .then(function(html) {
    //Success!

    // const paras = $('.tabContent , p', html)
    // console.log(paras.children[0].data)

    const wikiUrls = [];
    const paras = $(".tabContent , p", html);
    const ul = $(".tabContent , ul , li", html);
    // console.log(paras[4])

    for (let i = 0; i < paras.length; i++) {
      if (paras[i].children.length > 0 && ul[i].children.length > 0) {
        wikiUrls.push(paras[i].children[0].data);
        wikiUrls.push(ul[i].children[0].data);
      }
    }

    console.log(wikiUrls);
  })

  .catch(function(err) {
    //handle error
    console.log(err);
  });
