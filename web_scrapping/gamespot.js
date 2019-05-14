const rp = require("request-promise");
const $ = require("cheerio");
const url =
  "https://www.gamespot.com/articles/ghost-recon-breakpoint-revealed-for-ps4-xbox-one-a/1100-6466734/";

rp(url)
  .then(function(html) {
    //Success!

    // const paras = $('.tabContent , p', html)
    // console.log(paras.children[0].data)

    const wikiUrls = [];
    const paras = $(
      "#site-main, #site-wrapper, #mantle-skin, #wrapper, #site, #default-content, .primary-content, .article--one-column, article, .article-body, .js-content-entity-body, p",
      html
    );
    // console.log(paras[0].children[0].data)

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
