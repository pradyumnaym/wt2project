const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {type : String, required : true, unique : true, dropDups : true},
  password : {type : String, required : true},
  firstname : {type : String, required : true},
  lastname : {type : String, required : true},
  img : {type : String, required : false},
  email : {type : String, required : true},
  facebook : {type : String, required : false},
  twitter : {type : String, required : false},
  summary : {type : String, required : false},
  friends: {type : mongoose.Schema.Types.Mixed, required : true},
  friendrequests: {type : mongoose.Schema.Types.Mixed, required : true},
  games: {type : mongoose.Schema.Types.Mixed, required : true},
  gamerequests : {type : mongoose.Schema.Types.Mixed, required : true}, 
  gamesarray : {type : mongoose.Schema.Types.Mixed, required : true}
});

var User = (module.exports = mongoose.model("User", UserSchema));

module.exports.getUserByUserName = (username, callback) => {
  User.findOne({ username }, callback);
};

module.exports.addUser = (user, callback) => {
  var u = new User(user);
  u.save(callback);
};

module.exports.getAllUsers = (callback) =>{
  User.find({}, callback);
}