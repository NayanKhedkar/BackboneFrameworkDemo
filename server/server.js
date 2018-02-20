var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs');


var app = express();
app.use(express.static(path.join(__dirname, "../")));
app.use(bodyParser.json());

app.get('/', function(req, res) {
   res.sendfile('index.html');
    //alert("sended file");
});
app.post('/', function(req, res) {

});
var port = process.env.PORT || '3000';
app.listen(port);
console.log('Server on port : ' + port);