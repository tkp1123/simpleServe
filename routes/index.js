var express = require('express');
var fs = require('fs'); //文件模块
var router = express.Router();
var user = require('../public/javascripts/user.js')
var welcomeChart = require('../public/javascripts/welcomeChart.js')
var navData = require('../public/javascripts/nav.js')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/app/user', function (req, res, next) {
  user.userData(req, res, next)
})
router.post('/app/chartLine', function (req, res, next) {
  welcomeChart.chartLineData(req, res, next)
})
router.post('/app/chartBar', function (req, res, next) {
  welcomeChart.chartBarData(req, res, next)
})
router.post('/app/chartPie', function (req, res, next) {
  welcomeChart.chartPieData(req, res, next)
})
router.post('/app/chartRaddar', function (req, res, next) {
  welcomeChart.chartRaddarData(req, res, next)
})
router.get('/app/nav', function (req, res, next) {
  navData.navData(req, res, next)
})
module.exports = router;
