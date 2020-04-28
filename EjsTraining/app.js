var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.render("index.ejs");
})

app.get("/greetings/:visitor", function(req, res){
    var visitor = req.params.visitor.toUpperCase();
    res.render("greetings.ejs", {visitor:visitor})
})

app.listen(3000, function(){
    console.log("Server Running...")
})