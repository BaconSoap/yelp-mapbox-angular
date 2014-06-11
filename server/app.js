var express = require('express');
var q = require('Q');
var app = express();
var request = require('request');

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/api/data', function(req, res) {
	res.json({name: 'andrew'});
});

app.listen(1338, function() {
	console.info('server started');
});

//time travel