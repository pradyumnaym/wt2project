const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const jwt = require('jsonwebtoken');

const user = require(path.join(__dirname, "routes", "userRouter.js"));
const game = require(path.join(__dirname, "routes", "gameRouter.js"));
const images = require(path.join(__dirname, "routes", "imageRouter.js"))

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

var isMultipart = /^multipart\//i;
app.use(function (req, res, next) {
  var type = req.get('Content-Type');
  console.log(type);
  if (isMultipart.test(type)){ console.log("yes"); return next(); } 
  return express.urlencoded({ extended: false })(req, res, next);
});


app.use("/user", user);
app.use("/api", verifyToken, game);
app.use("/images", verifyToken, images);

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  
  if(typeof bearerHeader !== 'undefined'){
    const bearerToken = bearerHeader.split(' ')[1];

    req.token = bearerToken;

    jwt.verify(req.token, "secret_key", (err, authData) =>{
      if(err) res.sendStatus(403);
      else{
        res.user = authData;
        next();
      }

    });
  }else{
    res.sendStatus(403);
  }
}

app.listen(4000);
