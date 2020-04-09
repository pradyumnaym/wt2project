const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const user = require(path.join(__dirname, "routes", "userRouter.js"));
const game = require(path.join(__dirname, "routes", "gameRouter.js"));
const images = require(path.join(__dirname, "routes", "imageRouter.js"))
const verifyToken = require(path.join(__dirname, "jwt", "verifyToken.js"));
mongoose.connect(
  "mongodb+srv://pradyumnaym:password@123@cluster0-rmlwr.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  err => {
    if (err) console.log("Error in connecting to the database");
  }
);


const app = express();

app.use(express.static("./abc"));
app.use(express.json());
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
