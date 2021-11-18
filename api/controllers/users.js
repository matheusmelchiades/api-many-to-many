const model = require('../models/users')

module.exports.get = async (req, res) => {

    const users = await model.findAll()

    return res.send(users)
}

module.exports.getById = async (req, res) => {
    const { id } = req.params

    const [user] = await model.findById(id)

    if (!user) return res.status(400).send('Not found')

    return res.send(user)
}

module.exports.getProductsByUser = async (req, res) => {
    const { id } = req.params

    const productsByUser = await model.findProductsByUserId(id)

    return res.send(productsByUser)
}
