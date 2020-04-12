const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
var Feed = require('rss-to-json');
var feeds;
Feed.load('https://www.gamespot.com/feeds/game-news/', function(err, rss){
   feeds = rss;
});

app.listen(8000, () => {

  console.log("server started");
})

app.route('/api/feeds').get((req, res) => {
  res.send(feeds)
})
