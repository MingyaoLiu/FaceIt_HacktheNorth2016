
// Include all required NPM
var http = require('http');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var queryString = require('querystring');
var request = require('request');
// set up our express application
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}));
//Define port (prod is 80)
var port = process.env.PORT || 3000;
// Dev live-reload 
var livereload = require('livereload');
//Sending public folder
app.use(express.static(__dirname + '/www'));
app.get('/', function(req, res) {
        res.sendFile('index.html');
    });
// Get Emotions Status
app.post('/calculateDicksForHarambe', function(req, res) {

    var options = {
        url: 'https://api.projectoxford.ai/emotion/v1.0/recognize',
        headers: {
            'Content-Type' : 'application/json',
            'Ocp-Apim-Subscription-Key' : 'e75859b0571d4c3e8f2e7ff22f1a99d3'
        },
        json: { 'url' : 'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg' }
    }

    request.post(options, function(error, response, body){
        console.log(body);
        res.json(
            {
                "status" : 200,
                "msg" : body
            }
        )
    });
});
app.post('/calculateBigDicksForHarambe1', function(req, res, next) {
    req.rawBody = [];
    req.on('data', function(chunk) {
        req.rawBody.push(chunk);
    }).on('end', function() {
        req.rawBody = Buffer.concat(req.rawBody);
                var options = {
        url: 'https://api.projectoxford.ai/emotion/v1.0/recognize',
        headers: {
            'Content-Type' : 'application/octet-stream',
            'Ocp-Apim-Subscription-Key' : 'e75859b0571d4c3e8f2e7ff22f1a99d3'
        },
        body: req.rawBody
        }

    request.post(options, function(error, response, body){
        console.log(body);
        res.json(
            {
                "status" : 200,
                "msg" : body
            }
        )
    });
    })

});

app.post('/calculateBigDicksForHarambe', function(req, res) {

    var options = {
        url: 'https://api.projectoxford.ai/emotion/v1.0/recognize',
        headers: {
            'Content-Type' : 'application/octet-stream',
            'Ocp-Apim-Subscription-Key' : 'e75859b0571d4c3e8f2e7ff22f1a99d3'
        },
        body: req.rawBody
    }

    request.post(options, function(error, response, body){
        console.log(body);
        res.json(
            {
                "status" : 200,
                "msg" : body
            }
        )
    });
});

app.listen(port);
console.log('Cipher X running at ' + port);
exports = module.exports = app;
