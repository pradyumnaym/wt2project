const mongoose = require("mongoose");

const AchievementSchema = new mongoose.Schema({
  name: {type : String, required : true, unique : true, dropDups : true},
  text : {type : String, required : true},
  logo : {type : String, required : true},
  id : {type : String, required : true}
});

var Achievement = (module.exports = mongoose.model("Achievement", AchievementSchema));

module.exports.getAchievementById = (id, callback) => {
  Achievement.findOne({ id }, callback);
};

module.exports.addAchievement = (achievement, callback) => {
  var a = new Achievement(achievement);
  a.save(callback);
};