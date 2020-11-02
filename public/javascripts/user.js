var db = require('../../util/dbconfig')
//注册的时候需要查询是否已经有注册过的,会return true和false,true代表没有被注册,false代表已经被注册
let userIsHave = (dbData) => {
    //dbData 是拿到的要注册的参数
    const sql = "select * from user where name=?";
    const sqlArr = [dbData.name];
    const promise = new Promise(function (resolve, reject) {
        db.sqlConnect(sql, sqlArr, callback = (err, data) => {
            if (err) {
                console.log(err)
            } else {
                if (data.length == 0) {
                    resolve(true)
                } else {
                    reject(false)
                }
            }
        })
    }).catch((err) => {
        console.log(err)
    });
    return promise
}
module.exports = {
    loginData: (req, res, next) => {
        const param = req.body || req.query || req.params;
        const sql = "select * from user where name=?";
        const sqlArr = [param.name];
        const callback = (err, dbData) => {
            if (err) {
                console.log(err)
            } else {
                if (dbData.length == 0) {
                    res.json({
                        code: '403',
                        msg: '该用户尚未注册'
                    })
                } else {
                    let data = dbData[0];
                    if (param.name == data.name && param.password == data.pwd) {
                        res.json({
                            code: '200',
                            data: data,
                            msg: '登录成功'
                        })
                    } else {
                        res.json({
                            code: '403',
                            msg: '用户名或密码不正确'
                        })
                    }
                }
            }
        }
        db.sqlConnect(sql, sqlArr, callback)
    },
    registerData: (req, res, next) => {
        const param = req.body || req.query || req.params;
        userIsHave(param).then((thenData) => {
            if (thenData) {
                const sql = "insert into user set ?";
                const sqlArr = [param];
                const callback = (err, dbData) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json({
                            code: '200',
                            data: '',
                            msg: '注册成功'
                        })
                    }
                }
                db.sqlConnect(sql, sqlArr, callback)
            } else {
                res.json({
                    code: '403',
                    msg: '已经注册过了'
                })
            }
        })
    }
}