const model = require('../models/users')

module.exports.get = async (req, res) => {

    const users = await model.findAll()
    console.log(users)
    return res.send(users)
}

module.exports.getById = async (req, res) => {
    const { id } = req.params

    const result = await model.findById(id)

    console.log(result)

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