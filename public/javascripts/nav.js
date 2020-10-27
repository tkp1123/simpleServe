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
                    "path": "ccmx"
                },
                {
                    "id": "2-2",
                    "autoName": "持仓历史",
                    "path": "ccls"
                },
                {
                    "id": "2-3",
                    "autoName": "止损明细",
                    "path": "zsmx"
                },
                {
                    "id": "2-4",
                    "autoName": "止盈明细",
                    "path": "zymx"
                },
                {
                    "id": "2-5",
                    "autoName": "信用金明细",
                    "path": "xyjmx"
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
                    "path": "pcmx"
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
                    "path": "hymx"
                },
                {
                    "id": "4-2",
                    "autoName": "会员资金明细",
                    "path": "hyzjmx"
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
                    "path": "dlsmx"
                },
                {
                    "id": "5-2",
                    "autoName": "代理商资金明细",
                    "path": "dlszjmx"
                },
                {
                    "id": "5-3",
                    "autoName": "代理商分润比率设置",
                    "path": "dlsfrblsz"
                },
                {
                    "id": "5-4",
                    "autoName": "代理商分润明细",
                    "path": "dlsfrmx"
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
                    "path": "czyyl"
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
                    "path": "jsgl"
                },
                {
                    "id": "8-2",
                    "autoName": "权限一览",
                    "path": "qxyl"
                },
                {
                    "id": "8-3",
                    "autoName": "权限模版",
                    "path": "qxmb"
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