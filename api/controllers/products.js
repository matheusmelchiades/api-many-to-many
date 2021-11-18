const model = require('../models/products')

module.exports.get = async (req, res) => {

    const products = await model.findAll()

    return res.send(products)
}