const model = require('../models/users')

module.exports.get = async (req, res) => {

    const users = await model.findAll()

    return res.send(users)
}

module.exports.getById = async (req, res) => {
    const { id } = req.params

    const result = await model.findById(id)

    if (!result) return res.status(400).send('Not found')

    return res.send(result)
}

module.exports.getProductsByUser = async (req, res) => {
    const { id } = req.params

    const productsByUser = await model.findProductsByUserId(id)

    return res.send(productsByUser)
}

module.exports.create = async (req, res) => {
    const { name } = req.body;

    const user = await model.insertOne(name);

    return res.send(user);
}

module.exports.associateProductToUser = async (req, res) => {
    const { id, productId } = req.params

    await model.createAssociation(id, productId);

    return res.send(`associated product (${productId}) to user ${id}`)
}