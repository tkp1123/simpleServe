var express = require('express');
var fs = require('fs'); //文件模块
var router = express.Router();
var user = require('../../serve/public/javascripts/user.js')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/app/user', function (req, res, next) {
  user.userData(req, res, next)
})

module.exports = router;
