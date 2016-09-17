
// Include all required NPM
var http = require('http');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var queryString = require('querystring');
// set up our express application
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}));
//Define port (prod is 80)
var port = process.env.PORT || 80;
// Dev live-reload 
var livereload = require('livereload');
//Sending public folder
app.use(express.static(__dirname + '/www'));
app.get('/', function(req, res) {
        res.sendFile('index.html');
    });
app.listen(port);
console.log('Cipher X running at ' + port);
exports = module.exports = app;
