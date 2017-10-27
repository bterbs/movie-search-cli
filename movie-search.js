const request = require('request');
const cheerio = require('cheerio');
const buildUrl = require('build-url');

const searchTerm = process.argv.slice(2).join(' ');
const IMDBserver = 'http://www.imdb.com'
const IMDBpath = 'find'
const queryParams = {
  ref_: 'nv_sr_fn',
  s: 'all',
  q: searchTerm }

const options = {
  url: buildUrl(IMDBserver, { path: IMDBpath, queryParams }),
  method: 'GET',
}

request(options, (error, response, html) => {
  if (error) {
    console.error(`An error occurred retrieving the html: ${error.message}. Exiting`)
    process.exit(1)
  }
  if (response.statusCode !== 200) {
    console.error(`got non-200 response status: ${response.statusCode}. Exiting`)
    process.exit(1)
  }
  const $ = cheerio.load(html);
  $('td.result_text').each((i, element) => {
    console.log($(element).text());
  });
});
