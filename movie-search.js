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
  const $ = cheerio.load(html);
  $('td.result_text').each((i, element) => {
    var a = $(this);
    console.log(a.text());
  });
});
