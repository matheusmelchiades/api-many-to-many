const main = require('./routes/main')
const products = require('./routes/products')

module.exports.setup = app => {
    app.use(main.basePath, main.routes)
    app.use(products.basePath, products.routes)
}