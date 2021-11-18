const model = require('../models/products')

module.exports.get = async (req, res) => {

    const products = await model.findAll()

    return res.send(products)
}

module.exports.getById = async (req, res) => {
    const { id } = req.params

    const [product] = await model.findById(id)

    if (!product) return res.status(400).send('Not found')

    return res.send(product)
}

module.exports.getUsersByProduct = async (req, res) => {
    const { id } = req.params

    const usersByProduct = await model.findUsersByProductId(id)

    return res.send(usersByProduct)
}
