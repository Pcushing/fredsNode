// var jsdom = require("jsdom");

// jsdom.env(
//   "http://games.espn.com/flb/standings?leagueId=108648&seasonId=2017",
//   ["http://code.jquery.com/jquery.js"],
//   function (err, window) {
//     console.log(window.$('td.sortableTeamName a').text());
//   }
// );


var request = require('request');
var cheerio = require('cheerio');

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

        var transactions = $('.lo-recent-activity-item');
        console.log(transactions);
    }
});
