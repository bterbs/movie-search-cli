const request = require('request');
const cheerio = require('cheerio');
const buildUrl = require('build-url');
const rp = require('request-promise');


const searchTerm = process.argv.slice(2).join('');
const imdbServer = 'http://www.imdb.com/';
const imdbPath = 'find'
const queryParams = { ref_: 'nv_sr_fn',   s: 'all', q: searchTerm }

const options = {
  url: buildUrl(imdbServer, { path: imdbPath, queryParams}),
  method: 'GET',
}

request(options, function (error, response, html) {
  if (error) {
    console.error('Error occurred during html request!');
    process.exit(1)
  }
  if (response.statusCode !== 200) {
    console.error(`got non-200 response status: ${response.statusCode}`)
    process.exit(1)
  }
    var $ = cheerio.load(html);
    const results = [];
    $('td.result_text').each(function(i, element){
      var a = $(this);
      results.push([a.text()]);
    });
    const final = []
    results.forEach((result) => {
      final.push(result[0].split(' ').slice(0,6).join(' '));
    })

    final.forEach((result) => {console.log(result)})
});
