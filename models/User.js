const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {type : String, required : true, unique : true, dropDups : true},
  password : {type : String, required : true},
  friend_list: {type : mongoose.Schema.Types.Mixed, required : false},
  achievements: {type : mongoose.Schema.Types.Mixed, required : false}
});

var User = (module.exports = mongoose.model("User", UserSchema));

module.exports.getUserByUserName = (username, callback) => {
  User.findOne({ username }, callback);
};

module.exports.addUser = (user, callback) => {
  User.create([user], callback);
};