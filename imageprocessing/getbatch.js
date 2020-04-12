const path  = require('path')
const User = require(path.join("..", "models", "User.js"))
const fs = require("fs")

userlist = []
cond = false

User.getAllUsers((err, users) => {
    console.log(users)
    
    if(err) throw err;
    
    console.log(users)
    users.forEach((user)=>{
        var {username, img, friends} = user;
        userlist.push({username, img, friends});
    });

    let data  = JSON.stringify(userlist)

    fs.writeFileSync(path.join(__dirname, "data.json"), data)

    cond = true;
});

(function wait () {
    if (!cond) setTimeout(wait, 1000);
 })();

