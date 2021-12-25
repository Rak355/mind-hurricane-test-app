const express = require('express');
var app = express();

app.get('/register', function(req,res){
    res.send("please register")
});