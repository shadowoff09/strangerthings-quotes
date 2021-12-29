'use strict';

var express = require('express');
var path = require('path')
var quotesRepository = require('./quotesRepository');
var app = express();
var port = process.env.PORT || 3001;

app.use('/images', express.static('public/images'));

app.use('/css', express.static('public/css'));

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
});

app.get('/v1/quotes/:num?', function (req, res) {
    res.send(quotesRepository.getRandom(req.params.num || 1));
});

app.listen(port, function () {
    console.log('Server running on port', port);
})