var express = require('express');
var router = express.Router();

var userModel = require('../models/user')
var articleModel = require('../models/article')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
