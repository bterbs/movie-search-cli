/** @module scrape.js */


var fetch = require('node-fetch');
var cheerio = require('cheerio');

const BASE_URL = 'https://amazon.com/';

/* gets HTML data from page using node-fetch, parses with cheerio */

const getData = (itemNumber) => {
  fetch(`${BASE_URL}/${itemNumber}`)
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        const $ = cheerio.load(body);
        console.log(`'title:', ${title}.text()`);
    });
    .catch(console.error)
}
