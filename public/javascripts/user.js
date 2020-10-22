const _products = [
    { id: 1, title: 'iPad Pro', price: 500.01 },
    { id: 2, title: 'H&M T-Shirt White', price: 10.99 },
    { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99 },
    { id: 4, title: 'Porsche 911', price: 18932378.22 }
]
module.exports = {
    userData: (req, res, next) => {
        res.json({
            code: '200',
            data: _products
        })
    }
}