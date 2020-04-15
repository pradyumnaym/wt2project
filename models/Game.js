const mongoose = require("mongoose");

const Game1 = new mongoose.Schema({
  id: String,
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
  Game.findOne({id : setid}, (err, game)=>{
    if(err) throw err;
    if(game){
      for(var key in board){
        game[key] = board[key];
        game.markModified(key);
      }
      game.save();
    }else{
      var g = Game(board);
      g.save(callback);
    }
  });
};