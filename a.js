const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const server=http.createServer((req,res)=>{
    console.log(req);
    console.log(res);
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    res.end("Hello World!");
});
server.listen(port, hostname,()=>{
    console.log("port");
});



var xhttp = new XMLHttpRequest()
xhttp.open("POST", "http://localhost:4000/user/inccount");
xhttp.onreadystatechange(function(){if(this.readyState ==4 && this.status ==200) console.log("Incremented the game count!!")})
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.setRequestHeader("Authorization", `Bearer ${localStorage.getItem("token")}`);
xhttp.send( JSON.stringify({
    "gameId" : 0
}));