var express = require('express');
const path = require('path');
const User = require(path.join("..", "models", "User.js"))
const ProfilePic = require(path.join("..", "models", "ProfilePic.js"))
var router = express.Router();
const jwt = require('jsonwebtoken');
const formidable = require('formidable')
var fs = require("fs")



router.post("/login", (req, res)=>{
    const givenUser = req.body.user;

    User.getUserByUserName(givenUser.username, (err, usr)=>{
        if(err) throw err;
        if((usr != null) && (usr.password == givenUser.password)){
            console.log(usr);
            jwt.sign({username : usr.username}, "secret_key", {expiresIn: '2h'}, (err, token)=>{
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
    return res.status(201);
});

router.post("/register", (req, res)=>{
    //console.log(req);
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
      if (err) {
        throw err
      }
      newuser = fields;
      img = fs.readFileSync(files['file'].path) 
      type = files['file'].type
      ProfilePic.addImage(img, type, id =>{
        newuser['img'] = id;

        User.addUser(newuser, (err, nuser)=>{
          if(err) res.status(400).json(err);
          else res.status(200).json(nuser);
        })
      })
    })
});

module.exports = router;

