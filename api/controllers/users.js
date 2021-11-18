const model = require('../models/users')

module.exports.get = async (req, res) => {

    const users = await model.findAll()

    return res.send(users)
}