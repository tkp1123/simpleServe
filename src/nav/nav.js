const nav = {
    "menuList": [
        {
            "id": "1",
            "autoName": "首页",
            "path": "home",
            "icon": "iconfont iconmain"
        },
        {
            "id": "2",
            "autoName": "持仓管理",
            "path": "ccgl",
            "icon": "iconfont iconchicang",
            "children": [
                {
                    "id": "2-1",
                    "autoName": "持仓明细",
                    "path": "holdorderDetail"
                },
                {
                    "id": "2-2",
                    "autoName": "持仓历史",
                    "path": "holdorderHistory"
                },
                {
                    "id": "2-3",
                    "autoName": "止损明细",
                    "path": "stoplossDetail"
                },
                {
                    "id": "2-4",
                    "autoName": "止盈明细",
                    "path": "stopprofitDetail"
                },
                {
                    "id": "2-5",
                    "autoName": "信用金明细",
                    "path": "creditDetail"
                }
            ]
        },
        {
            "id": "3",
            "autoName": "平仓管理",
            "path": "pcgl",
            "icon": "iconfont iconpingcang",
            "children": [
                {
                    "id": "3-1",
                    "autoName": "平仓明细",
                    "path": "closeorderDetail"
                }
            ]
        },
        {
            "id": "4",
            "autoName": "会员管理",
            "path": "hygl",
            "icon": "iconfont iconhuiyuanguanli",
            "children": [
                {
                    "id": "4-1",
                    "autoName": "会员明细",
                    "path": "memberDetail"
                },
                {
                    "id": "4-2",
                    "autoName": "会员资金明细",
                    "path": "memberfundDetail"
                }
            ]
        },
        {
            "id": "5",
            "autoName": "代理商管理",
            "path": "dlsgl",
            "icon": "iconfont icondaili",
            "children": [
                {
                    "id": "5-1",
                    "autoName": "代理商明细",
                    "path": "agentDetail"
                },
                {
                    "id": "5-2",
                    "autoName": "代理商资金明细",
                    "path": "agentfundDetail"
                },
                {
                    "id": "5-3",
                    "autoName": "代理商分润比率设置",
                    "path": "agentfundSeparate"
                },
                {
                    "id": "5-4",
                    "autoName": "代理商分润明细",
                    "path": "agentfundSeparateDetail"
                }
            ]
        },
        {
            "id": "6",
            "autoName": "操作员管理",
            "path": "czygl",
            "icon": "iconfont iconcaozuoyuanguanli",
            "children": [
                {
                    "id": "6-1",
                    "autoName": "操作员一览",
                    "path": "operatorDetail"
                }
            ]
        },
        {
            "id": "7",
            "autoName": "权限管理",
            "path": "qxgl",
            "icon": "iconfont iconquanxian",
            "children": [
                {
                    "id": "7-1",
                    "autoName": "角色管理",
                    "path": "roleManagement"
                },
                {
                    "id": "7-2",
                    "autoName": "权限一览",
                    "path": "authorityDetail"
                },
                {
                    "id": "7-3",
                    "autoName": "权限模版",
                    "path": "authorityTemplate"
                }
            ]
        }
    ]
}
const navTemplate = {
    "menuList": [
        {
            "id": "1",
            "autoName": "首页",
            "path": "welcome",
            "icon": "iconfont iconsanguohome"
        },
        {
            "id": "2",
            "autoName": "用户管理",
            "path": "users",
            "icon": "iconfont iconyonghu2",
            "children": [
                {
                    "id": "2-1",
                    "autoName": "用户列表",
                    "path": "users",
                    "children": []
                }
            ]
        },
        {
            "id": "3",
            "autoName": "权限管理",
            "path": "permits",
            "icon": "iconfont iconquanxian",
            "children": [
                {
                    "id": "3-1",
                    "autoName": "角色列表",
                    "path": "roles",
                    "children": []
                },
                {
                    "id": "3-2",
                    "autoName": "权限列表",
                    "path": "permits",
                    "children": []
                }
            ]
        },
        {
            "id": "4",
            "autoName": "商品管理",
            "path": "goods",
            "icon": "iconfont icontubiao-qiantai-",
            "children": [
                {
                    "id": "4-1",
                    "autoName": "商品列表",
                    "path": "goods",
                    "children": []
                }
            ]
        },
        {
            "id": "5",
            "autoName": "订单管理",
            "path": "orders",
            "icon": "iconfont iconxiadan",
            "children": [
                {
                    "id": "5-1",
                    "autoName": "订单列表",
                    "path": "orders",
                    "children": []
                }
            ]
        },
        {
            "id": "6",
            "autoName": "数据统计",
            "path": "reports",
            "icon": "iconfont iconshujutongji",
            "children": [
                {
                    "id": "6-1",
                    "autoName": "数据统计",
                    "path": "reports",
                    "children": []
                }
            ]
        },
        {
            "id": "8",
            "autoName": "图表",
            "path": "chart",
            "icon": "iconfont iconzhuzhuangtutubiao",
            "children": [
                {
                    "id": "8-1",
                    "autoName": "charts图表",
                    "path": "charts",
                    "children": []
                }
            ]
        },
        {
            "id": "9",
            "autoName": "ZIP",
            "path": "zip",
            "icon": "iconfont iconzip",
            "children": [
                {
                    "id": "9-1",
                    "autoName": "export ZIP",
                    "path": "zips",
                    "children": []
                }
            ]
        },
        {
            "id": "10",
            "autoName": "Table",
            "path": "table",
            "icon": "iconfont iconTable",
            "children": [
                {
                    "id": "10-1",
                    "autoName": "table 列表",
                    "path": "tables",
                    "children": []
                }
            ]
        },
        {
            "id": "11",
            "autoName": "权限",
            "path": "power",
            "icon": "iconfont iconquanxian1",
            "children": [
                {
                    "id": "11-1",
                    "autoName": "页面权限",
                    "path": "powerPage",
                    "children": []
                },
                {
                    "id": "11-2",
                    "autoName": "角色权限",
                    "path": "powerUser",
                    "children": []
                }
            ]
        },
        {
            "id": "12",
            "autoName": "Excel",
            "path": "excel",
            "icon": "iconfont iconfile-excel",
            "children": [
                {
                    "id": "12-1",
                    "autoName": "导出 Excel",
                    "path": "exportExcel",
                    "children": []
                }
            ]
        },
        {
            "id": "13",
            "autoName": "组件",
            "path": "assembly",
            "icon": "iconfont iconzujian",
            "children": [
                {
                    "id": "13-1",
                    "autoName": "小组件列表",
                    "path": "assemblys",
                    "children": []
                }
            ]
        },
        {
            "id": "14",
            "autoName": "外链",
            "path": "outerChain",
            "icon": "iconfont iconcaozuo-wailian"
        },
        {
            "id": "15",
            "autoName": "Form",
            "path": "myform",
            "icon": "iconfont iconform"
        }
    ]
}

module.exports = {
    navData: (req, res, next) => {
        res.json({
            code: '200',
            data: nav
        })
    },
    navTemplateData: (req, res, next) => {
        res.json({
            code: '200',
            data: navTemplate
        })
    }
}