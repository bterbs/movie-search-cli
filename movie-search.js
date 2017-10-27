const request = require('request');
const cheerio = require('cheerio');

const searchTerm = process.argv.slice(2);

const options = {
  url: 'http://www.imdb.com/find?ref_=nv_sr_fn&q=' + searchTerm + '&s=all',
  method: 'GET',
}

request(options, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('td.result_text').each(function(i, element){
    var a = $(this);
    console.log(a.text());
  });
    };
});
