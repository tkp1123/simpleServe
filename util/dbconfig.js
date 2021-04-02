var mysql = require('mysql')
module.exports = {
    //配置参数
    config: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'root'
    },
    //连接数据库,使用mysql 的连接池
    //这里会接收三个参数
    //1.sql sql语句
    //2.sqlArr查询数组
    //3.callback回调
    sqlConnect: function (sql, sqlArr, callback) {
        var pool = mysql.createPool(this.config);
        pool.getConnection((err, conn) => {
            if (err) {
                return;
            } else {
                //事件驱动回调
                conn.query(sql, sqlArr, callback);
                //释放连接
                conn.release()
            }
        })
    }
}