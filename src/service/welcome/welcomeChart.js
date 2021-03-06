const chartLine = {
    chartData: [
        {
            name: '邮件营销',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ],
    legendData: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
    xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
}
module.exports = {
    chartLineData: (req, res, next) => {
        res.json({
            code: '200',
            data: chartLine
        })
    },
}