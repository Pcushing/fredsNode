var jsdom = require("jsdom");

jsdom.env(
  "http://games.espn.com/flb/standings?leagueId=108648&seasonId=2017",
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    console.log(window.$('td.sortableTeamName a').text());
  }
);