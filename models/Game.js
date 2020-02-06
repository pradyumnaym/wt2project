const mongoose = require("mongoose");

const Game1 = new mongoose.Schema({
  id: Number,
  w: mongoose.Schema.Types.Mixed,
  b: mongoose.Schema.Types.Mixed,
  wt: Number,
  lm: mongoose.Schema.Types.Mixed,
  lc: mongoose.Schema.Types.Mixed
});

var Game = (module.exports = mongoose.model("Game", Game1));

module.exports.getGameById = (searchid, callback) => {
  Game.findOne({ id: searchid }, callback);
};

module.exports.setGameById = (setid, board, callback) => {
  board.id = setid;
  var query = { id: setid };
  Game.findOneAndUpdate(
    query,
    board,
    { upsert: true },
    callback
  );
};