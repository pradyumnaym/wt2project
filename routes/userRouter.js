var express = require('express');
const path = require('path');
const User = require(path.join("..", "models", "User.js"))
const ProfilePic = require(path.join("..", "models", "ProfilePic.js"))
const jwt = require('jsonwebtoken');
const formidable = require('formidable');
const verifyToken = require(path.join("..", "jwt", "verifyToken.js"));

var fs = require("fs")


var router = express.Router();

router.post("/login", (req, res)=>{
    const givenUser = req.body.user;

    User.getUserByUserName(givenUser.username, (err, usr)=>{
        if(err) throw err;
        if((usr != null) && (usr.password == givenUser.password)){
            jwt.sign({username : usr.username, img : usr.img}, "secret_key", {expiresIn: '1h'}, (err, token)=>{
                if(err) throw err;
                res.status(200).json({
                    token
                });
            });
        }else{
            res.status(400).json({});
        }
    });

});

router.post("/logout", (req, res)=>{
  //nothing to do here... its on the client to delete the token
    return res.sendStatus(201);
});

router.post("/register", (req, res)=>{
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
      if (err) {
        throw err
      }
      newuser = fields;
      if(files && files['file']){
        img = fs.readFileSync(files['file'].path) 
        type = files['file'].type
        ProfilePic.addImage(img, type, id =>{
          newuser['img'] = id;

          User.addUser(newuser, (err, nuser)=>{
            if(err) res.status(400).json(err);
            else res.status(200).json(nuser);
          })
        })
      }else{
        User.addUser(newuser, (err, nuser)=>{
          if(err) res.status(400).json(err);
          else res.status(200).json(nuser);
        })
      }
    })
});

router.get("/userdetails", verifyToken,  (req, res) => {
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    var {img, firstname, lastname, username} = user;
    return res.status(200).json({firstname, lastname, username, img});
  });
});

module.exports = router;