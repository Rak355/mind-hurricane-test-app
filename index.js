const express = require('express');
var app = express();
var http = require('http');

app.use('/register', function(req,res){
    res.send("please register")
});

app.use('/login', function(req, res){
    res.send("please login")
});

app.use('/', function(req,res){
    res.send("welcome")
});

app.listen(process.env.PORT);
//app.listen(5000);