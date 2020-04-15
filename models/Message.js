const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    username : {type : String, required : true},
    timestamp : {type : String, required : true},
    msg : {type : String, required : true}
});

var Message = (module.exports = mongoose.model("Message", MessageSchema));

module.exports.addMessage = (message, callback) => {
  var m = new Message(message);
  m.save(callback);
};

module.exports.getAllMessages = (callback) =>{
  Message.find({}, callback);
}