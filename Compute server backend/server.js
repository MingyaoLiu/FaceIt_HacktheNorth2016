
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
app.post('/calculateBigMassiveDicksForHarambe', function(req, res, next) {
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

        

        var bText = JSON.parse(body);

        if (typeof(bText[0]) != "undefined") {

        var value = 0;
        var emoValue = "";
        var stOpt = [];
        var num = Math.floor(Math.random() * 5);

        for (var type = 0; type < 8; type++)
        {
            
            switch(type) {
                case 0:
                    if (bText[0].scores.anger > value)
                    {
                        value = (1.2 * bText[0].scores.anger);
                        stOpt = ["😡", "****", "I AM MAD", "WTF!?!", "What did you say?"];
                        emoValue = stOpt[num];
                    }
                    break;
                case 1:
                    if (bText[0].scores.contempt > value)
                    {
                        value = bText[0].scores.contempt;
                        stOpt = ["😕", "I'm Salty", "smh smh", "...", "Ugh..."];
                        emoValue = stOpt[num];
                    }
                    break;
                case 2:
                    if (bText[0].scores.disgust > value)
                    {
                        value = bText[0].scores.disgust;
                        stOpt = ["😤", "UGH! That was rough", "WHAT?!?", "MANnnnn", "WTH"];
                        emoValue = stOpt[num];
                    }
                    break;
                case 3:
                    if (bText[0].scores.fear > value)
                    {
                        value = bText[0].scores.fear;
                        stOpt = ["😫", "UGH! That was rough", "WHAT?!?", "MANnnnn", "Take a Hike"];
                        emoValue = stOpt[num];
                    }
                    break;
                case 4:
                    if (bText[0].scores.happiness > value)
                    {
                        value = bText[0].scores.happiness;
                        stOpt = ["😁", "LOL", "LMAO", "LAWL", "HAHAHA"];
                        emoValue = stOpt[num];
                    }
                    break;
                case 5:
                    if (bText[0].scores.neutral > value)
                    {
                        value = bText[0].scores.neutral;
                        stOpt = ["🙂", "Ok.", "That is fine", "-_-", "Great"];
                        emoValue = stOpt[num];
                    }
                    break;
                case 6:
                    if (bText[0].scores.sadness > value)
                    {
                        value = bText[0].scores.sadness;
                        stOpt = ["😢", "I'm feeling aweful", 
                                ":'(", 
                                "Dang...", "Sigh..."];
                        emoValue = stOpt[num];
                    }
                    break;
                case 7:
                    if (bText[0].scores.surprise > value)
                    {
                        value = bText[0].scores.surprise;
                        stOpt = [":O", 
                                "Wow!", 
                                "WTF!", 
                                "Oh shit!", 
                                ":O"];
                        emoValue = stOpt[num];
                    }
                    break;
                default:
                    emoValue = "-_-";
                    break;
            }
            }
            }
            else {
                emoValue = "-_-";
            }
        
    
        res.json(
            {
                "status" : 200,
                "msg" : body,
                "text" : emoValue
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
