var express = require('express'),
  port = process.env.PORT || 8080;
express()
  .use(express.static(__dirname))
  .get('/', function (req, res) {
    res.render('index');
  })
  .listen(port, function (req, res) {
    console.log('Our app is running');
  });
