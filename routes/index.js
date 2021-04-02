const express = require('express');
const fs = require('fs'); //文件模块
const router = express.Router();
const user = require('../src/service/user/user.js')
const welcomeChart = require('../src/service/welcome/welcomeChart.js')
const navData = require('../src/service/nav/nav.js')
const chartData = require('../src/service/chart/chartData.js')
const custom = require('../src/service/custom/custom.js')

//登录
router.post('/app/login', function (req, res, next) {
  user.loginData(req, res, next)
})
//注册
router.post('/app/register', function (req, res, next) {
  user.registerData(req, res, next)
})
//
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
//侧边栏
router.post('/app/nav', function (req, res, next) {
  navData.navData(req, res, next)
})
//用户管理查询
router.post('/app/custom/select', function (req, res, next) {
  custom.selectCustom(req, res, next)
})
//用户管理新增
router.post('/app/custom/insert', function (req, res, next) {
  custom.insertCustom(req, res, next)
})
//用户管理删除
router.post('/app/custom/delete', function (req, res, next) {
  custom.deleteCustom(req, res, next)
})
//用户管理修改
router.post('/app/custom/update', function (req, res, next) {
  custom.updateCustom(req, res, next)
})
router.get('/app/chart', function (req, res, next) {
  chartData.chartData(req, res, next)
})
module.exports = router;
