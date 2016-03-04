var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.get('/', function (req, res) {
	res.send("Hello world");
});

app.listen(3000, function() {
  console.log('server started');
});