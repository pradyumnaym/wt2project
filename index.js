const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const Game = require(path.join(__dirname, "models", "Game.js"));

mongoose.connect(
  "mongodb://localhost:27017/chess",
  { useNewUrlParser: true, useFindAndModify: false },
  err => {
    if (err) console.log("Error in connecting to the database");
  }
);

app.use(express.static("./abc"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/getboard", (req, res) => {
  Game.getGameById(req.query.code, (err, board) => {
    if (err) throw err;
    res.status(200).json(board);
  });
});

app.post("/api/setboard", (req, res) => {
  Game.setGameById(
    Number(req.query.code),
    JSON.parse(req.query.pieces),
    (err, game) => {
      if (err) throw err;
      res.send("Done adding new Data!");
    }
  );
});
app.listen(4000);
