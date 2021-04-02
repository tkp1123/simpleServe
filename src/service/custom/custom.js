const db = require('../../../util/dbconfig')
module.exports = {
    //增
    insertCustom: (req, res, next) => {
        let param = req.body || req.query || req.params;
        customIsHave(param).then((thenData) => {
            if (param.name == '' || param.email == '' || param.mobile == '' || param.address == '') {
                res.json({
                    code: '403',
                    msg: '请填写完整'
                })
                return
            }
            if (thenData) {
                const sql = "INSERT INTO custom (name,email,mobile,address,status) VALUES (?,?,?,?,?)";
                const sqlArr = [param.name, param.email, param.mobile, param.address, param.status];
                const callback = (err, dbData) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json({
                            code: '200',
                            data: '',
                            msg: '添加成功'
                        })
                    }
                }
                db.sqlConnect(sql, sqlArr, callback)
            } else {
                res.json({
                    code: '403',
                    msg: '已经存在'
                })
            }
        })
    },
    //删
    deleteCustom: (req, res, next) => {
        let param = req.body || req.query || req.params;
        customIsHave(param).then((thenData) => {
            console.log(thenData)
            if (!thenData) {
                const sql = "DELETE FROM custom WHERE id = ?";
                const sqlArr = [param.id];
                const callback = (err, dbData) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json({
                            code: '200',
                            data: '',
                            msg: '删除成功'
                        })
                    }
                }
                db.sqlConnect(sql, sqlArr, callback)
            } else {
                res.json({
                    code: '403',
                    msg: '不存在'
                })
            }
        })
    },
    //改
    updateCustom: (req, res, next) => {
        let param = req.body || req.query || req.params;
        customIsHave(param).then((thenData) => {
            console.log(thenData)
            if (param.name == '' || param.email == '' || param.mobile == '' || param.address == '') {
                res.json({
                    code: '403',
                    msg: '请填写完整'
                })
                return
            }
            if (!thenData) {
                const sql = "UPDATE custom SET name=?,email=?,mobile=?,address=?,status=? where id=?";
                const sqlArr = [param.name, param.email, param.mobile, param.address, param.status, param.id];
                const callback = (err, dbData) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json({
                            code: '200',
                            data: '',
                            msg: '修改成功'
                        })
                    }
                }
                db.sqlConnect(sql, sqlArr, callback)
            } else {
                res.json({
                    code: '403',
                    msg: '不存在'
                })
            }
        })
    },
    //查
    selectCustom: (req, res, next) => {
        let param = req.body || req.query || req.params;
        //console.log(param)
        let sql = ''
        let sqlNum = 'select COUNT(*) as num from custom'
        let sqlNumArr = []
        let sqlArr = []
        if (param.name == '') {
            sql = 'select * from custom limit ?,?';
            sqlArr = [(param.offset - 1) * param.size, param.size];
        } else {
            sql = 'select * from custom where name=? limit ?,?'
            sqlArr = [param.name, (param.offset - 1) * param.size, param.size];
        }
        let callback = (err, dbData) => {
            //console.log(dbData)
            if (err) {
                console.log(err)
            } else {
                if (dbData.length == 0) {
                    res.json({
                        code: '403',
                        msg: '用户不存在'
                    })
                } else {
                    db.sqlConnect(sqlNum, sqlNumArr, callback = (err, data) => {
                        if (err) {
                            console.log(err)
                        } else {
                            res.json({
                                code: '200',
                                data: { data: dbData, total: data[0].num },
                                msg: '查询成功'
                            })
                        }
                    })
                }
            }
        }
        db.sqlConnect(sql, sqlArr, callback)
    },
}
let customIsHave = (dbData) => {
    //dbData 是拿到的要添加的参数
    let sql = "select * from custom where name=?";
    let sqlArr = [dbData.name];
    //这里需要一个promise异步操作,因为查询数据库是需要时间的
    let promise = new Promise(function (resolve, reject) {
        db.sqlConnect(sql, sqlArr, callback = (err, data) => {
            console.log(data)
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
        //捕获promise
    }).catch((err) => {
        console.log(err)
    });
    return promise
}