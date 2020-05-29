const express = require('express');
const api = express.Router();
const path = require("path");
const uuidv4 = require('uuid').v4;

const Game = require(path.join("..", "models", "Game.js"));
const User = require(path.join("..", "models", "User.js"));
const Request = require(path.join("..", "models", "Request.js"));

// var Feed = require('rss-to-json');
// var feeds;
// Feed.load('https://www.gamespot.com/feeds/game-news/', function(err, rss){
//    feeds = rss;
// });

api.post("/getboard", (req, res) => {
  Game.getGameById(req.body.code, (err, board) => {
    if (err) throw err;
    res.status(200).json(board);
  });
});

api.post("/setboard", (req, res) => {
  Game.setGameById(
    req.body.code,
    JSON.parse(req.body.pieces),
    (err, game) => {
      if (err) throw err;
      res.send("Done adding new Data!");
    }
  );
});

api.post('/sendrequest', (req, res)=>{
  if(!req.body.username) return res.sendStatus(400);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    var reqid = uuidv4();
    var request = {
      reqid, 
      from : req.user.username,
      to : req.body.username,
      accepted : false
    }
    Request.addRequest(request, (err, requestobj)=>{
      if(err) throw err;
      user.gamerequests.push(requestobj.reqid);
      user.save();
      User.getUserByUserName(req.body.username, (err, user1) =>{
        if(err) return res.sendStatus(500);
        if(!user1) return res.sendStatus(404);
        user1.gamerequests.push(requestobj.reqid);
        user.markModified("gamerequests");
        user1.markModified("gamerequests");
        user1.save();
         return res.status(200).json([]);

      });
    })
  });
});

api.post('/acceptrequest', (req, res) =>{
  if(!req.body.reqid) return res.sendStatus(400);
  Request.getRequestByRequestId(req.body.reqid, (err, request)=>{
    if(err) throw err;
    if(!request) return res.sendStatus(404);
    request.accepted = true;
    request.markModified("accepted");
    request.save();
    return res.status(200).json({});
  });
});


api.get('/feeds',(req, res) => {
  res.send(feeds)
})


module.exports = api;