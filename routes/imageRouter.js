const express = require('express');
const api = express.Router();
const path = require("path");
const ProfilePic = require(path.join("..", "models", "ProfilePic.js"));
const verifyToken = require(path.join("..", "jwt", "verifyToken.js"));

api.get("/profilepic", verifyToken, (req, res) => {
  if(!req.user.img) return res.sendStatus(404);
  ProfilePic.getImageById(req.user.img, (err, doc) => {
    if (err) throw err;
    if(!doc) return res.sendStatus(404);
    res.status(200);
    res.contentType(doc.img.contentType);
    res.send(doc.img.data);
  });
});

api.get("/logo/:imgid", verifyToken, (req, res)=>{
  ProfilePic.getImageById(req.params.imgid, (err, doc) => {
    if (err) throw err;
    if(!doc) return res.sendStatus(404);
    res.status(200);
    res.contentType(doc.img.contentType);
    res.send(doc.img.data);
  });
});
module.exports = api;