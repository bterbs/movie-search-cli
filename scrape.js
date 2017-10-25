var request = require('request');
var cheerio = require('cheerio');

request('http://www.imdb.com/find?ref_=nv_sr_fn&q=julia+roberts&s=all.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});
