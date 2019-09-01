const rp = require("request-promise");
const $ = require("cheerio");
//const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const url = "https://www.pro-football-reference.com/years/2018/games.htm";

rp(url)
  .then(function(html) {
    //success!
    console.log(
      $(
        "#games > tbody:nth-child(4) > tr > td:nth-child(8) > a:nth-child(1)",
        html
      ).length
    );
    const boxscoreUrls = [];
    for (let i = 0; i < 267; i++) {
      boxscoreUrls.push(
        $(
          "#games > tbody:nth-child(4) > tr > td:nth-child(8) > a:nth-child(1)",
          html
        )[i].attribs.href
      );
    }
    console.log(boxscoreUrls);

    //console.log(html);
  })
  .catch(function(err) {
    //handle error
  });
