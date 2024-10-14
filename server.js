var express = require("express");
var app = express();

app.listen(2000,function(){
    console.log("Server Started");
})

app.get("/",function(req,resp){
    let path = __dirname+"/index.html";
    resp.sendFile(path);
})

app.get("/signup-process",function(req,resp){
    resp.send("Hello");
})
