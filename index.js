const express = require('express');
var app = express();
var http = require('http');

app.get('/register', function(req,res){
    res.send("please register")
});

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(process.env.PORT);