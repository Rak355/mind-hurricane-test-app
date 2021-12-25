const express = require('express');
var app = express();
var http = require('http');

app.use('/', function(req,res){
    res.send("welcome")
});

app.use('/register', function(req,res){
    res.send("please register")
});

//.listen(process.env.PORT);
app.listen(5000);