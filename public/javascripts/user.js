const user = {
    email: 'dad@qq.com',
    id: 200,
    mobile: '13891315170',
    rid: '0',
    token: '15sdsd',
    userName: 'admin',
    password: '123456'
}
module.exports = {
    userData: (req, res, next) => {
        const param = req.body || req.query || req.params;
        console.log(param)
        if (param.name == user.userName && param.password == user.password) {
            res.json({
                code: '200',
                data: user,
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