var express = require('express');
const path = require('path');
const User = require(path.join("..", "models", "User.js"))
var router = express.Router();
const jwt = require('jsonwebtoken');
const formidable = require('formidable')


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
    //if(req.body.user.image) add the imageurl attribute
    // User.addUser(req.body.user, (err, user)=>{
    //     if(err) {res.status(405).json({err});}
    //     else {
    //         //console.log(user["_id"])
    //         res.status(200).json(user);
    //     }
    // });
    
    console.log("yes_route");
    //console.log(req);
    new formidable.IncomingForm().parse(req)
    .on('field', (name, field) => {
      console.log('Field', name, field)
    })
    .on('file', (name, file) => {
      console.log('Uploaded file', name, file)
    })
    .on('aborted', () => {
      console.error('Request aborted by the user')
    })
    .on('error', (err) => {
      console.error('Error', err)
      throw err
    })
    .on('end', () => {
      res.end()
    })
});

module.exports = router;

