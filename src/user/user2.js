const user = {
    name: '白展堂',
    pwd: '123456'
}
module.exports = {
    login2Data: (req, res, next) => {
        res.json({
            code: '200',
            data: user
        })
    },

}