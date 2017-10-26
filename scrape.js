/** @module scrape.js */


var fetch = require('node-fetch');
var cheerio = require('cheerio');

const BASE_URL = 'https://www.google.com/';

/* gets HTML data from page using node-fetch, parses with cheerio */

const getData = (itemNumber) => {
  fetch(`${BASE_URL}/${itemNumber}`)
    .then(function(res) {
        console.log(res.text());
    }).then(function(body) {
        const $ = cheerio.load(body);
        console.log($);
    });
  //  .catch(console.error)
}
