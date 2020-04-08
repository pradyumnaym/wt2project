const express = require('express');
const api = express.Router();
const path = require("path");
const ProfilePic = require(path.join("..", "models", "ProfilePic.js"));


api.get("/:imgid", (req, res) => {
  console.log(req.query);
  ProfilePic.getImageById(req.params.imgid, (err, image) => {
    if (err) throw err;
    res.status(200);
    res.contentType(image.contentType);
    res.send(img.data);
  });
});

module.exports = api;