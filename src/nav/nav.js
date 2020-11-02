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
            "id": "8",
            "autoName": "权限管理",
            "path": "qxgl",
            "icon": "iconfont iconquanxian",
            "children": [
                {
                    "id": "8-1",
                    "autoName": "角色管理",
                    "path": "roleManagement"
                },
                {
                    "id": "8-2",
                    "autoName": "权限一览",
                    "path": "authorityDetail"
                },
                {
                    "id": "8-3",
                    "autoName": "权限模版",
                    "path": "authorityTemplate"
                }
            ]
        }
    ]
}
module.exports = {
    navData: (req, res, next) => {
        res.json({
            code: '200',
            data: nav
        })
    }
}