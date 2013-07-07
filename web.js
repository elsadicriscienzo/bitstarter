var express = require('express');
var fs = require('fs');
var stringFromFile = fs.readFileSync('index.html', 'UTF8');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(stringFromFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
