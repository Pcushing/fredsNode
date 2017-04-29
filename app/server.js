var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  url = 'http://games.espn.com/flb/leagueoffice?leagueId=108648&seasonId=2017';

  request(url, function(error, response, html){
      // First we'll check to make sure no errors occurred when making the request

      if(!error){
        // TBD

      }
  })

})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;