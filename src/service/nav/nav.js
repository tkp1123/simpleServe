const db = require('../../../util/dbconfig')
module.exports = {
    navData: (req, res, next) => {
        const param = req.body || req.query || req.params;
        //const sql = "select * from menu";
        const sql = " SELECT * FROM menu  WHERE id IN(SELECT menu_id FROM permit WHERE role_id IN(SELECT role_id FROM `user` WHERE id=(SELECT id FROM `user` WHERE id=?)))"
        const sqlArr = [param.id];
        const callback = (err, dbData) => {
            if (err) {
                console.log(err)
            } else {
                if (dbData.length == 0) {
                    res.json({
                        code: '403',
                        msg: '获取失败'
                    })
                } else {
                    res.json({
                        code: '200',
                        data: dbData,
                        msg: ''
                    })
                }
            }
        }
        db.sqlConnect(sql, sqlArr, callback)
    },
}