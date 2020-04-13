const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors');

const user = require(path.join(__dirname, "routes", "userRouter.js"));
const game = require(path.join(__dirname, "routes", "gameRouter.js"));
const images = require(path.join(__dirname, "routes", "imageRouter.js"))
const verifyToken = require(path.join(__dirname, "jwt", "verifyToken.js"));
const Request = require(path.join(__dirname, "models", "Request.js"))

mongoose.connect(
  "mongodb+srv://pradyumnaym:password@123@cluster0-rmlwr.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  err => {
    if (err) console.log("Error in connecting to the database");
  }
);

const app = express();

app.use(cors());
app.use(express.static("./abc"));
app.use(express.json());
app.get('/request/:reqid', verifyToken, (req, res)=>{
  Request.getRequestByRequesId(req.params.reqid, (err, request)=>{
    if(err) throw err;
    if(!request) return res.sendStatus(404);
    var {reqid, from, to, accepted} = request;
    return res.status(200).json({reqid, from, to, accepted});
  })
})
//app.use(express.urlencoded({ extended: false }));

//use bodyparser middleware only if it is not of MIME type multipart*
var isMultipart = /^multipart\//i;
app.use(function (req, res, next) {
  var type = req.get('Content-Type');
  if (isMultipart.test(type)){ return next(); } 
  return express.urlencoded({ extended: false })(req, res, next);
});

//API routes, protected routes have verify token middleware
app.use("/user", user);
app.use("/api", verifyToken, game);
app.use("/images", images);

app.listen(4000);
