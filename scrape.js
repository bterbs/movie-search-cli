/** @module scrape.js */


var request = require('request');
var cheerio = require('cheerio');

const BASE_URL = 'https://news.ycombinator.com';

request(BASE_URL, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
      $('span.comhead').each(function(i, element){
        var a = $(this).prev();
        console.log(a.text());
      });
    };
});

/* gets HTML data from page using node-fetch, parses with cheerio */

// const getData = () => {
//   fetch(BASE_URL)
//     .then(function(res) {
//         console.log(res.text());
//     }).then(function(body) {
//         const $ = cheerio.load(body);
//         console.log($);
//     }).catch(console.error)
// }

//
