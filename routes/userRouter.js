var express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const formidable = require('formidable');
var fs = require("fs")
const bcrypt = require('bcryptjs');

const verifyToken = require(path.join("..", "jwt", "verifyToken.js"));
const User = require(path.join("..", "models", "User.js"))
const ProfilePic = require(path.join("..", "models", "ProfilePic.js"))
const cosinesimilarity = require(path.join("..", "util", "cosine.js"));

var router = express.Router();

router.post("/login", (req, res)=>{
    const givenUser = req.body.user;

    User.getUserByUserName(givenUser.username, (err, usr)=>{
        if(err) throw err;
        if((usr != null) && (bcrypt.compareSync(givenUser.password, usr.password))){
            jwt.sign({username : usr.username}, "secret_key", {expiresIn: '1h'}, (err, token)=>{
                if(err) throw err;
                return res.status(200).json({
                    token
                });
            });
        }else{
            return res.status(400).json({});
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
      newuser["friends"] = []
      newuser["achievements"] = []
      newuser["games"] = []
      newuser["friendrequests"] = []
      newuser["gamerequests"] = []
      newuser["password"] = bcrypt.hashSync(newuser["password"], 10)
      newuser["gamesarray"] = [0, 0, 0]
    
      if(files && files['file']){
        img = fs.readFileSync(files['file'].path) 
        type = files['file'].type;
        ProfilePic.addImage(img, type, id =>{
          newuser['img'] = id;

          User.addUser(newuser, (err, nuser)=>{
            if(err) return res.status(400).json(err);
            else return res.sendStatus(200);
          })
        })
      }else{
        User.addUser(newuser, (err, nuser)=>{
          if(err) return res.status(400).json(err);
          else return res.sendStatus(200);
        })
      }
    })
});

router.get("/userdetails", verifyToken,  (req, res) => {
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    var {img, firstname, lastname, username, email , facebook , twitter, summary} = user;
    return res.status(200).json({firstname, lastname, username, img, email , facebook , twitter, summary});
  });
});

router.get("/profile/:username", verifyToken, (req, res)=>{
  User.getUserByUserName(req.params.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    var {img, firstname, lastname, username, email , facebook , twitter, summary} = user;
    return res.status(200).json({img, firstname, lastname, username, email , facebook , twitter, summary});
  });
});

router.post("/friendslist", verifyToken, (req, res)=>{
  //console.log(req.body);
  User.getUserByUserName(req.body.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    var {friends} = user;
    return res.status(200).json(friends);
  });
});

router.get("/friendrequests", verifyToken, (req, res)=>{
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    var {friendrequests} = user;
    return res.status(200).json(friendrequests);
  });
});

router.post("/sendrequest", verifyToken, (req, res) =>{
  if(!req.body.username) return res.sendStatus(405);
  User.getUserByUserName(req.body.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    if(user["friends"].indexOf(req.user.username) !== -1) return res.sendStatus(201);
    if(user["friendrequests"].indexOf(req.user.username) == -1) {
      user["friendrequests"].push(req.user.username);
      user.markModified("friendrequests");
    }else{
      return res.sendStatus(201);
    }
    user.save(err=>console.log(err));
    return res.status(200).json({});
  });
});

router.post("/addfriend", verifyToken, (req, res) =>{
  if(!req.body.username) return res.sendStatus(405);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user["friends"].push(req.body.username);
    user['friendrequests'].splice(user['friendrequests'].indexOf(req.body.username), 1)
    
    user.save(err=>console.log(err));
    User.getUserByUserName(req.body.username, (err, sender) =>{
      if(err) return res.sendStatus(500);
      if(!sender) return res.sendStatus(404);
      user.markModified("friends");
      user.markModified("friendrequests");
      sender["friends"].push(req.user.username);
      sender.markModified("friends");
      sender.save(err=> {});
      return res.status(200).json({});
    });
  });
});

router.post("/rejectrequest", verifyToken, (req, res) =>{
  if(!req.body.username) return res.sendStatus(405);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user['friendrequests'].splice(user['friendrequests'].indexOf(req.body.username), 1)
    user.markModified("friendrequests");
    user.save(err=>{});
    return res.status(200).json({});
  });
});

router.post("/addfacebook", verifyToken, (req, res) => {
  if(!req.body.link) return res.sendStatus(405);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user["facebook"] = req.body.link;
    user.markModified("facebook");
    user.save(err=>{});
    return res.status(200).json({});
  });
});

router.post("/addtwitter", verifyToken, (req, res) => {
  if(!req.body.link) return res.sendStatus(405);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user["twitter"] = req.body.link;
    user.markModified("twitter");
    user.save(err=>{});
    return res.status(200).json({});
  });
});

router.post("/addsummary", verifyToken, (req, res) => {
  if(!req.body.text) return res.sendStatus(405);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user["summary"] = req.body.text;
    user.markModified("summary");
    user.save(err=>{});
    return res.status(200).json({});
  });
});


router.post("/updateimage", verifyToken, (req, res)=>{
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
      if (err) {
        throw err
      }
      if(files && files['file']){
        img = fs.readFileSync(files['file'].path) 
        type = files['file'].type;
        if(user.img){
          ProfilePic.removeImage(user.img)
        }
        ProfilePic.addImage(img, type, id =>{
          user['img'] = id;
          user.save();
          return res.status(200).json({});
        })
      }else{
        return res.sendStatus(405);
      }
    })
  });
});

router.get('/allusers', (req, res)=>{
  userlist = []
  User.getAllUsers((err, users) => {
    if(err) throw err;
    users.forEach((user)=>{
        var {username, img, friends} = user;
        userlist.push({username, img, friends});
    });
    res.status(200).json(userlist)
    let data  = JSON.stringify(userlist, null, 2)
    fs.writeFileSync(path.join(__dirname, "..", "imageprocessing", "data.json"), data)
  });
});

router.get('/updateusers', (req, res)=>{
  let data = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "imageprocessing", "data.json")))
  data.forEach(user =>{
    User.getUserByUserName(user.username, (err, duser)=>{
      if(err) throw err;
      duser.friends = user.friends;
      duser.markModified("friends");
      duser.save();
    });
  });
  return res.sendStatus(200);
});


router.get('/gamerequests', verifyToken, (req, res) =>{
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    return res.status(200).json(user.gamerequests);
  });
});

router.delete('/gamerequests', verifyToken, (req, res) =>{
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) return res.sendStatus(500);
    if(!user) return res.sendStatus(404);
    user.gamerequests = []
    user.markModified("gamerequests");
    user.save();
    return res.status(200).json([]);
  });
});

router.post('/usersimilarity', verifyToken, (req, res)=>{
  if(!req.body.username) return res.sendStatus(400);
  User.getUserByUserName(req.user.username, (err, user)=>{
    if(!user)return res.sendStatus(404);
    if(err) throw err;
    User.getUserByUserName(req.body.username, (err, user1)=>{
      if(!user1)return res.sendStatus(404);
      if(err) throw err;
      return res.status(200).json([cosinesimilarity(user.gamesarray, user1.gamesarray)]);
    });
  });
});

router.post('/inccount', verifyToken, (req, res)=>{
  if(!req.body.gameId && req.body.gameId !== 0) return res.sendStatus(400);
  if(isNaN(req.body.gameId) || (req.body.gameId<0) || req.body.gameId>2) return res.sendStatus(400);
  User.getUserByUserName(req.user.username, (err, user) =>{
    if(err) throw err;
    if(!user) return res.sendStatus(404);
    user.gamesarray[Number(req.body.gameId)] += 1;
    user.markModified("gamesarray");
    user.save();
    return res.sendStatus(200);
  });
});

module.exports = router;