var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
    url = 'http://games.espn.com/flb/recentactivity?leagueId=108648';

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture

            var playersAdded, playersRemoved, transactionTeam, transactionTime;

            // var title, release, rating;
            var json = {
              playersAdded : "",
              playersRemoved : "",
              transactionTeam : "",
              transactionTime : ""
            };
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;