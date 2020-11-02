var express = require('express');
var fs = require('fs'); //文件模块
var router = express.Router();
var user = require('../src/user/user.js')
var welcomeChart = require('../src/welcome/welcomeChart.js')
var navData = require('../src/nav/nav.js')
var chartData = require('../src/chart/chartData.js')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/app/login', function (req, res, next) {
  user.loginData(req, res, next)
})
router.post('/app/register', function (req, res, next) {
  user.registerData(req, res, next)
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
router.get('/app/chart', function (req, res, next) {
  chartData.chartData(req, res, next)
})
module.exports = router;
