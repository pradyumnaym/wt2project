const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  reqid : {type : String, required : true}, 
  from : {type : String, required : true}, 
  to : {type : String, required : true}, 
  accepted : {type : Boolean, required : true}
});

var Request = (module.exports = mongoose.model("Request", RequestSchema));

module.exports.getRequestByRequestId = (reqid, callback) => {
  Request.findOne({ reqid }, callback);
};

module.exports.addRequest = (request, callback) => {
  var r = new Request(request);
  r.save(callback);
};
