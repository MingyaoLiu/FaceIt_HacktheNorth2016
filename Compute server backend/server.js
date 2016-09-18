
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
                        value = bText[0].scores.anger;
                        stOpt = ["😡", "****", "I AM MAD", "😠", "What did you say?"];
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
                                "https://static-cdn.jtvnw.net/jtv_user_pictures/twitchconbiblethump-profile_image-aebd2d4c1d7c59f1-300x300.png", 
                                "Dang...", "Sigh..."];
                        emoValue = stOpt[num];
                    }
                    break;
                case 7:
                    if (bText[0].scores.surprise > value)
                    {
                        value = bText[0].scores.surprise;
                        stOpt = ["https://qph.ec.quoracdn.net/main-qimg-493968e878889ae5dd7927881e87275f-c?convert_to_webp=true", 
                                "http://scontent.cdninstagram.com/t51.2885-15/e35/12362469_1499185643717654_421388754_n.jpg?ig_cache_key=MTE0NTE2NzI2NjM3NTcyNzc3NQ%3D%3D.2", 
                                "https://s-media-cache-ak0.pinimg.com/564x/a0/de/9d/a0de9db9be725c6d5fa225a341c7ae88.jpg", 
                                "http://media-hearth.cursecdn.com/attachments/29/642/635955503191534058.jpg", 
                                "http://res.cloudinary.com/urbandictionary/image/upload/a_exif,c_fit,h_200,w_200/v1395991705/gjn81wvxqsq6yzcwubok.png"];
                        emoValue = stOpt[num];
                    }
                    break;
                default:
                    emoValue = "http://scontent.cdninstagram.com/t51.2885-15/e35/13259622_1775186732712894_858002705_n.jpg?ig_cache_key=MTI2MjI4NDAyOTExOTA3MzkyOQ%3D%3D.2";
                    break;
            }
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
