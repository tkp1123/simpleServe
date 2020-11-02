const chartLine = {
    appleData: {
        name: 'apple',
        type: 'line',
        stack: '总量',
        color: '#40c9c6',
        data: [120, 132, 101, 134, 90, 230, 210],
    },
    pearData: {
        name: 'pear',
        type: 'line',
        stack: '总量',
        color: '#36a3f7',
        data: [220, 182, 191, 234, 290, 330, 310],
    },
    grapeData: {
        name: 'grape',
        type: 'line',
        stack: '总量',
        color: '#f4516c',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
    cherryData: {
        name: 'cherry',
        type: 'line',
        stack: '总量',
        color: '#34bfa3',
        data: [824, 935, 961, 938, 1230, 1310, 1120],
    },
    legendData: ['apple', 'pear', 'grape', 'cherry'],
    panelGroupData: { 'apple': '102,400', 'pear': '102,400', 'grape': '102,400', 'cherry': '102,400', }
}
const animationDuration = 3000
const chartBar = [
    {
        name: 'pear',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [180, 522, 2003, 3341, 3901, 3130, 1220],
        animationDuration,
        itemStyle: {
            normal: {
                color: '#36a3f7',
            },
        },
    },
    {
        name: 'grape',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [301, 152, 2010, 3134, 3190, 1330, 1220],
        animationDuration,
        itemStyle: {
            normal: {
                color: '#f4516c',
            },
        },
    },
]
const chartPie = [
    {
        name: '访问来源',
        type: 'pie',
        roseType: 'radius',
        radius: [15, 95],
        center: ['50%', '38%'],
        data: [
            {
                value: 320,
                name: 'apple',
                itemStyle: {
                    normal: {
                        color: '#40c9c6',
                    },
                },
            },
            {
                value: 240,
                name: 'pear',
                itemStyle: {
                    normal: {
                        color: '#36a3f7',
                    },
                },
            },
            {
                value: 149,
                name: 'grape',
                itemStyle: {
                    normal: {
                        color: '#f4516c',
                    },
                },
            },
            {
                value: 100,
                name: 'cherry',
                itemStyle: {
                    normal: {
                        color: '#34bfa3',
                    },
                },
            },
        ],
        animationEasing: 'cubicInOut',
    },
]
const chartRaddar = [
    {
        value: [5000, 7000, 12000, 11000, 15000, 14000],
        name: 'apple',
        itemStyle: {
            normal: {
                color: '#40c9c6',
            },
        },
    },
    {
        value: [4000, 9000, 15000, 15000, 13000, 11000],
        name: 'pear',
        itemStyle: {
            normal: {
                color: '#36a3f7',
            },
        },
    },
    {
        value: [5500, 11000, 12000, 15000, 12000, 12000],
        name: 'grape',
        itemStyle: {
            normal: {
                color: '#f4516c',
            },
        },
    },
    {
        value: [9000, 2000, 10000, 10000, 9000, 8000],
        name: 'cherry',
        itemStyle: {
            normal: {
                color: '#34bfa3',
            },
        },
    },
]
module.exports = {
    chartLineData: (req, res, next) => {
        res.json({
            code: '200',
            data: chartLine
        })
    },
    chartBarData: (req, res, next) => {
        res.json({
            code: '200',
            data: chartBar
        })
    },
    chartPieData: (req, res, next) => {
        res.json({
            code: '200',
            data: chartPie
        })
    },
    chartRaddarData: (req, res, next) => {
        res.json({
            code: '200',
            data: chartRaddar
        })
    }
}