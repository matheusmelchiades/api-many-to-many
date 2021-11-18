const main = require('./routes/main')
const users = require('./routes/users')
const products = require('./routes/products')

module.exports.setup = app => {
    app.use('/', main)
    app.use('/users', users)
    app.use('/products', products)
}