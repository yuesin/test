var express = require('express');
var opn = require('opn');
var app = express();

app.use(express.static('public'));

var server = app.listen(3006, function () {
  opn('http://127.0.0.1:3006');
  console.log('App listening at http://127.0.0.1:3006');
});