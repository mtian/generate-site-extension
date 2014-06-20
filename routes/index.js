var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
var html_dir = './public/html/';

router.get('/', function(req, res) {
  res.sendfile(path.join(html_dir, 'index.html'));
});

router.post('/', function(req, res) {
  console.log(req);
  res.send("OK");
});

module.exports = router;
