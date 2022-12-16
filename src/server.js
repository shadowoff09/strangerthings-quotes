'use strict';

var express = require('express');
var quotesRepository = require('./quotesRepository');
var app = express();
var port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
});

app.get('/api/quotes/:num?', function (req, res) {
    res.send(quotesRepository.getRandom(req.params.num || 1));
});

app.listen(port, function () {
    console.log('Server running on port', port);
})