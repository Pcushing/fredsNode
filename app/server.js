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
        var $ = cheerio.load(html);
        var transactions = $('.lo-recent-activity-item');

        for (i=0; i<transactions.length; i++) {
          var playersAdded, playersRemoved, transactionTeam, transactionTime;
          // console.log('*****************');
          // console.log($(transactions[i]).text());

          var transaction = $(transactions[i]);
          transactionTime = transaction.find('.recent-activity-when');
          // console.log(transactionTime.text());
          var description = transaction.find('.recent-activity-description');
          var transactionTeam = description.text().match(/(.*) added/)[1];
          console.log(transactionTeam);


          // console.log(description.text().match(/(.*) added (.*)\,/)[2]);
          // console.log(description.text().match(/(.*) dropped (.*)\,/)[2]);
        }
      }
  })

})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;