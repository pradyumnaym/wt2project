const express = require('express');
const api = express.Router();
const path = require("path");
const Message = require(path.join("..", "models", "Message.js"));

api.post('/addmsg', (req, res)=>{
    if(!req.body.timestamp || !req.body.msg) return res.sendStatus(400);
    var msg = {username : req.user.username, timestamp : req.body.timestamp, msg : req.body.msg}
    Message.addMessage(msg, (err, msg)=>{
        if(err) throw err;
        return res.sendStatus(200);
    });
});

api.get('/msg', (req, res)=>{
    Message.getAllMessages((err, messages)=>{
        if(err) throw err;
        newlist = []
        messages.forEach(doc =>{
            var {username, timestamp, msg} = doc;
            newlist.push({username, timestamp, msg});
        });
        return res.status(200).json(newlist);
    });

});

module.exports = api;