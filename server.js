var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/therm', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.post('/temp', function (req, res) {
  res.send('You sent the name "' + req.body.name + '".');
  name = req.body.name
  console.log(name)
  // console.log(JSON.parse(req.body.ts));
  // res.json(req.body);
});

app.get('/temp', function (req, res) {
  res.send('Test page');
});

app.get('/nextpage', function (req, res) {
  res.send('testtest');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

