const express = require('express');
const api = express.Router();
const path = require("path");
const Game = require(path.join("..", "models", "Game.js"));


api.post("/getboard", (req, res) => {
  console.log(req.query);
  Game.getGameById(req.body.code, (err, board) => {
    if (err) throw err;
    res.status(200).json(board);
  });
});

api.post("/setboard", (req, res) => {
  Game.setGameById(
    Number(req.body.code),
    JSON.parse(req.body.pieces),
    (err, game) => {
      if (err) throw err;
      res.send("Done adding new Data!");
    }
  );
});

module.exports = api;